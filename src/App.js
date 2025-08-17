import React, { useState, useEffect } from 'react';
import { Settings, Leaf, Sun, Calendar, Clock, Star, Wind } from 'lucide-react';

const SemesterCountdownWidget = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [themeType, setThemeType] = useState('totoro');
  const [characterType, setCharacterType] = useState('calcifer');
  const [weeksLeft, setWeeksLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [showSettings, setShowSettings] = useState(true);

  // Studio Ghibli inspired themes
  const themes = {
    totoro: {
      name: 'Forest Spirit',
      bgGradient: 'from-green-100 via-emerald-50 to-teal-100',
      skyColor: 'from-green-200/30 to-emerald-100/20',
      cardBg: 'bg-white/90',
      textPrimary: 'text-green-900',
      textSecondary: 'text-green-700',
      accent: 'text-emerald-600',
      button: 'bg-green-500 hover:bg-green-600',
      border: 'border-green-200',
      shadow: 'shadow-green-200/50',
      plantColor: 'text-green-400',
      emoji: '🌳'
    },
    ponyo: {
      name: 'Ocean Magic',
      bgGradient: 'from-blue-100 via-cyan-50 to-teal-100',
      skyColor: 'from-blue-200/30 to-cyan-100/20',
      cardBg: 'bg-white/90',
      textPrimary: 'text-blue-900',
      textSecondary: 'text-blue-700',
      accent: 'text-cyan-600',
      button: 'bg-blue-500 hover:bg-blue-600',
      border: 'border-blue-200',
      shadow: 'shadow-blue-200/50',
      plantColor: 'text-blue-400',
      emoji: '🌊'
    },
    kiki: {
      name: 'Autumn Delivery',
      bgGradient: 'from-purple-100 via-pink-50 to-rose-100',
      skyColor: 'from-purple-200/30 to-pink-100/20',
      cardBg: 'bg-white/90',
      textPrimary: 'text-purple-900',
      textSecondary: 'text-purple-700',
      accent: 'text-pink-600',
      button: 'bg-purple-500 hover:bg-purple-600',
      border: 'border-purple-200',
      shadow: 'shadow-purple-200/50',
      plantColor: 'text-purple-400',
      emoji: '🔮'
    },
    howl: {
      name: 'Moving Castle',
      bgGradient: 'from-amber-100 via-yellow-50 to-orange-100',
      skyColor: 'from-amber-200/30 to-yellow-100/20',
      cardBg: 'bg-white/90',
      textPrimary: 'text-amber-900',
      textSecondary: 'text-amber-700',
      accent: 'text-orange-600',
      button: 'bg-amber-500 hover:bg-amber-600',
      border: 'border-amber-200',
      shadow: 'shadow-amber-200/50',
      plantColor: 'text-amber-400',
      emoji: '✨'
    }
  };

  // Cute character options with motivational phrases
  const characters = {
    calcifer: {
      name: 'Calcifer',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      getPhrase: (weeks) => {
        const phrases = [
          `🔥 Hey! Only ${weeks} weeks left! You're burning bright!`,
          `🔥 ${weeks} more weeks? Easy peasy! You've got the fire!`,
          `🔥 Keep that flame alive! ${weeks} weeks to go!`,
          `🔥 You're almost there! ${weeks} weeks left - you got this!`
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
      },
      render: () => (
        <div className="relative animate-flicker">
          {/* Main flame body - teardrop shape */}
          <div className="relative w-14 h-18">
            {/* Base flame */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 rounded-full relative overflow-hidden">
              {/* Inner flame glow */}
              <div className="absolute inset-2 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-full opacity-80" />
              <div className="absolute inset-4 bg-gradient-to-t from-yellow-200 to-white rounded-full opacity-60" />
            </div>
            
            {/* Flame tips */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-t from-yellow-400 via-orange-300 to-red-400 rounded-full animate-dance" />
            <div className="absolute -top-2 left-3 w-4 h-8 bg-gradient-to-t from-orange-400 to-red-500 rounded-full animate-dance" style={{animationDelay: '0.3s'}} />
            <div className="absolute -top-2 right-3 w-3 h-6 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full animate-dance" style={{animationDelay: '0.6s'}} />
            
            {/* Calcifer's face */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
              {/* Big expressive eyes */}
              <div className="flex gap-1.5 mb-1.5">
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full border border-black" />
                  <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-black rounded-full" />
                  <div className="absolute top-0.5 left-1 w-0.5 h-0.5 bg-white rounded-full" />
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full border border-black" />
                  <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-black rounded-full" />
                  <div className="absolute top-0.5 left-1 w-0.5 h-0.5 bg-white rounded-full" />
                </div>
              </div>
              {/* Cute smile */}
              <div className="relative">
                <div className="w-4 h-2 bg-black rounded-b-full" />
                <div className="absolute -top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                <div className="absolute -top-0.5 right-0.5 w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
            
            {/* Flame particles */}
            <div className="absolute -top-4 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle" />
            <div className="absolute -top-3 right-2 w-1 h-1 bg-orange-400 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}} />
            <div className="absolute -top-5 left-1/2 w-0.5 h-0.5 bg-red-400 rounded-full animate-sparkle" style={{animationDelay: '1s'}} />
          </div>
        </div>
      )
    },
    jiji: {
      name: 'Jiji',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      getPhrase: (weeks) => {
        const phrases = [
          `🐱 Meow! ${weeks} weeks left - you're purr-fect!`,
          `🐱 Only ${weeks} more weeks! Even I believe in you!`,
          `🐱 ${weeks} weeks to go! Stay curious like a cat!`,
          `🐱 Whiskers up! ${weeks} weeks left - you're magical!`
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
      },
      render: () => (
        <div className="relative">
          {/* Jiji's body */}
          <div className="relative w-12 h-14">
            {/* Main body */}
            <div className="w-10 h-12 bg-gradient-to-b from-gray-900 to-black rounded-full relative mx-auto">
              {/* Ears */}
              <div className="absolute -top-3 left-2">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-transparent border-b-gray-900" />
                <div className="absolute top-1 left-1 w-0 h-0 border-l-[2px] border-r-[2px] border-b-[6px] border-transparent border-b-pink-400" />
              </div>
              <div className="absolute -top-3 right-2">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-transparent border-b-gray-900" />
                <div className="absolute top-1 left-1 w-0 h-0 border-l-[2px] border-r-[2px] border-b-[6px] border-transparent border-b-pink-400" />
              </div>
              
              {/* Face */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                {/* Big round eyes - Jiji style */}
                <div className="flex gap-1.5 mb-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full border border-orange-500" />
                    <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-black rounded-full" />
                    <div className="absolute top-0.5 left-1.5 w-0.5 h-0.5 bg-white rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full border border-orange-500" />
                    <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-black rounded-full" />
                    <div className="absolute top-0.5 left-1.5 w-0.5 h-0.5 bg-white rounded-full" />
                  </div>
                </div>
                
                {/* Nose */}
                <div className="w-1 h-1 bg-pink-500 rounded-full mx-auto mb-1" />
                
                {/* Mouth - subtle cat smile */}
                <div className="relative">
                  <div className="w-2 h-0.5 bg-gray-700 rounded-full mx-auto" />
                  <div className="absolute -top-0.5 left-0 w-1 h-1 border-l border-b border-gray-700 rounded-bl-full" />
                  <div className="absolute -top-0.5 right-0 w-1 h-1 border-r border-b border-gray-700 rounded-br-full" />
                </div>
              </div>
              
              {/* Whiskers */}
              <div className="absolute top-5 -left-2">
                <div className="w-4 h-0.5 bg-gray-600 rounded-full transform -rotate-12" />
                <div className="w-3 h-0.5 bg-gray-600 rounded-full transform rotate-12 mt-0.5" />
              </div>
              <div className="absolute top-5 -right-2">
                <div className="w-4 h-0.5 bg-gray-600 rounded-full transform rotate-12" />
                <div className="w-3 h-0.5 bg-gray-600 rounded-full transform -rotate-12 mt-0.5" />
              </div>
            </div>
            
            {/* Tail */}
            <div className="absolute -right-2 top-8 w-8 h-1.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full transform rotate-45 animate-wag origin-left" />
            <div className="absolute -right-1 top-6 w-6 h-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transform rotate-12 animate-wag origin-left" style={{animationDelay: '0.2s'}} />
          </div>
        </div>
      )
    },
    ponyo: {
      name: 'Ponyo',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      getPhrase: (weeks) => {
        const phrases = [
          `🐟 Ponyo says ${weeks} weeks left! Swimming to success!`,
          `🐟 Splash! Only ${weeks} more weeks! You're fin-tastic!`,
          `🐟 ${weeks} weeks to go! Dive into your studies!`,
          `🐟 Bubbles of joy! ${weeks} weeks left - keep swimming!`
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
      },
      render: () => (
        <div className="relative animate-swim">
          {/* Ponyo's body */}
          <div className="relative w-14 h-12">
            {/* Main body - more fish-like */}
            <div className="w-12 h-10 bg-gradient-to-br from-red-400 via-orange-400 to-pink-400 rounded-full relative">
              {/* Face */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                {/* Big Ponyo eyes */}
                <div className="flex gap-1 mb-1">
                  <div className="relative">
                    <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-black rounded-full" />
                    <div className="absolute top-1 left-1.5 w-1 h-1 bg-white rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-white rounded-full border-2 border-black" />
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-black rounded-full" />
                    <div className="absolute top-1 left-1.5 w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
                
                {/* Happy Ponyo mouth */}
                <div className="relative">
                  <div className="w-4 h-2 bg-black rounded-full" />
                  <div className="absolute -top-1 left-0.5 w-1 h-1 bg-pink-300 rounded-full" />
                  <div className="absolute -top-1 right-0.5 w-1 h-1 bg-pink-300 rounded-full" />
                </div>
              </div>
              
              {/* Ponyo's distinctive red hair/fins */}
              <div className="absolute -top-2 left-1">
                <div className="w-3 h-5 bg-gradient-to-t from-red-500 to-red-400 rounded-t-full transform -rotate-12" />
              </div>
              <div className="absolute -top-3 left-3">
                <div className="w-4 h-6 bg-gradient-to-t from-red-500 to-orange-400 rounded-t-full" />
              </div>
              <div className="absolute -top-3 left-6">
                <div className="w-3 h-5 bg-gradient-to-t from-orange-400 to-red-400 rounded-t-full transform rotate-12" />
              </div>
              <div className="absolute -top-2 right-1">
                <div className="w-2 h-4 bg-gradient-to-t from-red-500 to-pink-400 rounded-t-full transform rotate-12" />
              </div>
              
              {/* Body fins */}
              <div className="absolute left-0 top-4">
                <div className="w-3 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-l-full transform -rotate-12" />
              </div>
              <div className="absolute right-0 top-4">
                <div className="w-3 h-2 bg-gradient-to-l from-orange-400 to-red-400 rounded-r-full transform rotate-12" />
              </div>
              
              {/* Tail fin */}
              <div className="absolute -right-1 top-3">
                <div className="w-4 h-6 bg-gradient-to-br from-red-400 to-orange-400 rounded-r-full transform rotate-12" />
                <div className="absolute top-1 right-0 w-3 h-4 bg-gradient-to-br from-orange-400 to-pink-400 rounded-r-full" />
              </div>
            </div>
            
            {/* Water bubbles */}
            <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-300 rounded-full animate-bubble" />
            <div className="absolute -top-2 right-2 w-1.5 h-1.5 bg-blue-200 rounded-full animate-bubble" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-1 -right-2 w-1 h-1 bg-cyan-300 rounded-full animate-bubble" style={{animationDelay: '1s'}} />
          </div>
        </div>
      )
    }
  };

  const currentTheme = themes[themeType];
  const currentCharacter = characters[characterType];

  useEffect(() => {
    if (startDate && endDate) {
      const now = new Date();
      const end = new Date(endDate);
      const timeDiff = end - now;
      
      if (timeDiff > 0) {
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(days / 7);
        setWeeksLeft(weeks);
        setDaysLeft(days % 7);
      } else {
        setWeeksLeft(0);
        setDaysLeft(0);
      }
    }
  }, [startDate, endDate]);

  const GhibliBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.bgGradient}`} />
      <div className={`absolute inset-0 bg-gradient-to-t ${currentTheme.skyColor}`} />
      
      {/* Floating magical elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`magic-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          >
            <Star className={`w-4 h-4 ${currentTheme.plantColor}`} />
          </div>
        ))}
      </div>
      
      {/* Gentle leaves */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute animate-sway opacity-40"
            style={{
              left: `${5 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 1.2}s`
            }}
          >
            <Leaf className={`w-6 h-6 ${currentTheme.plantColor}`} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GhibliBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-sm w-full space-y-6">
          
          {/* Settings Panel */}
          {showSettings && (
            <div className={`${currentTheme.cardBg} backdrop-blur-sm rounded-3xl p-8 ${currentTheme.shadow} shadow-xl border ${currentTheme.border} transition-all duration-500`}>
              <div className="text-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-white/50 to-white/20 w-fit mx-auto mb-4">
                  <Settings className={`w-8 h-8 ${currentTheme.accent}`} />
                </div>
                <h2 className={`text-xl font-bold ${currentTheme.textPrimary} mb-1`}>
                  Magic Settings
                </h2>
                <p className={`text-sm ${currentTheme.textSecondary}`}>
                  Choose your magical theme and companion
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium ${currentTheme.textPrimary} mb-3`}>
                    Choose Your World
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => setThemeType(key)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          themeType === key 
                            ? `${theme.button} text-white border-transparent shadow-lg` 
                            : `bg-white/50 ${currentTheme.textSecondary} ${currentTheme.border} hover:bg-white/80`
                        }`}
                      >
                        <div className="text-lg mb-1">{theme.emoji}</div>
                        <div className="text-xs font-medium">{theme.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${currentTheme.textPrimary} mb-3`}>
                    Pick Your Companion
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(characters).map(([key, character]) => (
                      <button
                        key={key}
                        onClick={() => setCharacterType(key)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 flex flex-col items-center ${
                          characterType === key 
                            ? `${character.bgColor} ${character.color} border-current shadow-lg` 
                            : `bg-white/50 ${currentTheme.textSecondary} ${currentTheme.border} hover:bg-white/80`
                        }`}
                      >
                        <div className="mb-1 scale-75">
                          {character.render()}
                        </div>
                        <div className="text-xs font-medium">{character.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium ${currentTheme.textPrimary} mb-2`}>
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className={`w-full p-4 rounded-xl bg-white/70 ${currentTheme.border} border ${currentTheme.textPrimary} focus:outline-none focus:ring-2 focus:ring-current/30 transition-all duration-300`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${currentTheme.textPrimary} mb-2`}>
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className={`w-full p-4 rounded-xl bg-white/70 ${currentTheme.border} border ${currentTheme.textPrimary} focus:outline-none focus:ring-2 focus:ring-current/30 transition-all duration-300`}
                    />
                  </div>
                </div>
                
                <button
                  onClick={() => setShowSettings(false)}
                  className={`w-full ${currentTheme.button} text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Begin Your Journey
                </button>
              </div>
            </div>
          )}

          {/* Countdown Display */}
          {!showSettings && startDate && endDate && (
            <div className={`${currentTheme.cardBg} backdrop-blur-sm rounded-3xl p-8 ${currentTheme.shadow} shadow-xl border ${currentTheme.border} transition-all duration-500`}>
              <div className="text-center">
                {/* Character and message */}
                <div className="mb
