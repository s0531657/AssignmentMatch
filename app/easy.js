import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Button, Alert, TouchableOpacity, Vibration } from 'react-native';
import Styles from '../styles/page-styles';
import { Link } from 'expo-router';

const cardColors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3', '#F3FF33'];

const generateInitialCards = () => {
  return cardColors
    .flatMap((color, index) => [
      { id: `card-${index * 2}`, color, isFlipped: false, isMatched: false },
      { id: `card-${index * 2 + 1}`, color, isFlipped: false, isMatched: false },
    ])
    .sort(() => Math.random() - 0.5);
};

const EasyGame = () => {
  const [cards, setCards] = useState(generateInitialCards());
  const [score, setScore] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (!isPlaying && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);

  useEffect(() => {
    const allMatched = cards.every((card) => card.isMatched);
    if (allMatched && isPlaying) {
      setIsPlaying(false);
      Alert.alert("You Win!", `Score: ${score}\nTime: ${timer} seconds`, [
        { text: "Reset", onPress: resetGame },
      ]);
    }
  }, [cards, isPlaying, score, timer]);

  const handlePress = (cardId) => {
    if (flippedCards.length >= 2 || !isPlaying) return;
  
    const newFlippedCards = flippedCards.concat(cardId);
    setFlippedCards(newFlippedCards);
  
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isFlipped: true } : card
      )
    );
  
    if (newFlippedCards.length === 2) {
      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === secondCardId);
  
      if (firstCard.color === secondCard.color) {
        setScore((prevScore) => prevScore + 100);
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFlippedCards.includes(card.id) ? { ...card, isMatched: true } : card
          )
        );
      } else {
        Vibration.vibrate();
      }
  
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFlippedCards.includes(card.id) ? { ...card, isFlipped: false } : card
          )
        );
        setFlippedCards([]);
      }, 1000);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setCards(generateInitialCards());
    setScore(0);
    setTimer(0);
    setFlippedCards([]);
  };

  const resetGame = () => {
    setIsPlaying(false);
    setCards(generateInitialCards());
    setScore(0);
    setTimer(0);
    setFlippedCards([]);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.page}>
        <Link href="/" asChild>
          <TouchableOpacity style={Styles.backButton}>
            <Text>←</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Text style={Styles.instructions}>Click start game to play!</Text>
      <View style={Styles.buttons}>
        <Button title="Start Game" onPress={startGame} />
        <Button title="Reset Game" onPress={resetGame} />
      </View>
      <View style={Styles.grid}>
        {cards.map((card) =>
          card.isMatched ? (
            <View key={card.id} style={[Styles.card, Styles.cardPlaceholder]} />
          ) : (
            <Pressable key={card.id} onPress={() => handlePress(card.id)} style={Styles.card}>
              <View style={[Styles.card, card.isFlipped || card.isMatched ? { backgroundColor: card.color } : null]}>
                <Text style={Styles.cardText}>{card.isFlipped ? '' : 'x '}</Text>
              </View>
            </Pressable>
          )
        )}
      </View>
      <Text style={Styles.score}>Score: {score}</Text>
      <Text style={Styles.timer}>Time: {timer} seconds</Text>
    </View>
  );
};

export default EasyGame;
