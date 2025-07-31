// Array of micro habits (trimmed for brevity – use full list in actual)
const microHabits = [
"Do 10 pushups",
    "Write down one thing you're grateful for",
    "Stretch for 1 minute",
    "Smile at yourself in the mirror",
    "Take 5 deep breaths",
    "Make your bed",
    "Read one page of a book",
    "Do 20 jumping jacks",
    "Compliment someone",
    "Write down your top priority for the day",
    "Eat a piece of fruit",
    "Stand up and walk for 2 minutes",
    "Practice good posture for 5 minutes",
    "Send a thank you text to someone",
    "Clean one small area of your space",
    "Do 10 squats",
    "Listen to one uplifting song",
    "Write down one goal for tomorrow",
    "Practice mindful breathing for 2 minutes",
    "Do 5 minutes of decluttering",
    "Hold a plank for 30 seconds",
    "Write down three things that went well today",
    "Drink herbal tea instead of coffee",
    "Do 10 lunges",
    "Text a friend or family member",
    "Practice a power pose for 2 minutes",
    "Eat a healthy snack",
    "Do 15 calf raises",
    "Write in a journal for 5 minutes",
    "Take the stairs instead of the elevator",
    "Practice a random act of kindness",
    "Do 10 burpees",
    "Meditate for 3 minutes",
    "Eat lunch without any distractions",
    "Do 20 high knees",
    "Read an inspiring quote",
    "Practice saying 'no' to something unnecessary",
    "Do 10 tricep dips",
    "Take a cold shower",
    "Write down your biggest win from today",
    "Do 15 bicycle crunches",
    "Practice gratitude meditation for 2 minutes",
    "Organize your digital desktop",
    "Do 10 mountain climbers",
    "Call someone you care about",
    "Practice visualization for 3 minutes",
    "Do 20 arm circles",
    "Eat vegetables with every meal",
    "Do 5 minutes of yoga stretches",
    "Write down your daily intentions",
    "Practice deep belly breathing",
    "Do 10 wall push-ups",
    "Take a mindful walk for 5 minutes",
    "Practice positive self-talk",
    "Do 15 sit-ups",
    "Drink green tea",
    "Practice the 5-4-3-2-1 grounding technique",
    "Do 10 modified push-ups",
    "Write down one lesson learned today",
    "Take a photo of something beautiful",
    "Do 20 butt kicks",
    "Practice saying one affirmation",
    "Eat breakfast within an hour of waking",
    "Do 10 side lunges",
    "Listen to a motivational podcast for 5 minutes",
    "Practice mindful eating with one bite",
    "Do 15 Russian twists",
    "Write a short poem or haiku",
    "Take 10 slow, deep breaths",
    "Do 5 minutes of dancing",
    "Practice progressive muscle relaxation",
    "Do 10 step-ups",
    "Write down your mood and energy level",
    "Practice loving-kindness meditation for 2 minutes",
    "Do 20 toe touches",
    "Drink water before every meal",
    "Practice gentle neck stretches",
    "Do 10 chair dips",
    "Write down three things you appreciate about yourself",
    "Take a technology break for 30 minutes",
    "Do 15 leg raises",
    "Practice mindful listening in a conversation",
    "Do 5 minutes of gentle stretching",
    "Write down your evening reflection",
    "Practice box breathing (4-4-4-4)",
    "Do 10 reverse lunges",
    "Eat mindfully without multitasking",
    "Practice shoulder blade squeezes",
    "Do 20 standing marches",
    "Write down one thing you want to improve",
    "Take a gratitude walk",
    "Do 10 glute bridges",
    "Practice the 4-7-8 breathing technique",
    "Do 5 minutes of core exercises",
    "Write down your daily wins",
    "Practice mindful hand washing",
    "Do 15 heel raises",
    "Take a moment to appreciate nature",
    "Practice gentle spinal twists",
    "Do 10 lateral raises (no weights needed)",
    "Write down your daily priorities",
    "Practice mindful eating with one meal",
    "Do 20 arm swings",
    "Take a power nap (10-20 minutes)",
    "Practice gentle hip circles",
    "Do 10 single-leg stands",
    "Write down your feelings in a journal",
    "Practice mindful walking up stairs",
    "Do 15 standing hip abductions",
    "Take a moment to smile genuinely",
    "Practice ankle rotations",
    "Do 10 modified burpees",
    "Write down one positive affirmation",
    "Practice mindful breathing while waiting",
    "Do 20 gentle twists",
    "Take a digital detox for 1 hour",
    "Practice wrist and finger stretches",
    "Do 10 standing side bends",
    "Write down your weekly goals",
    "Practice mindful observation of surroundings",
    "Do 15 alternating knee lifts",
    "Take time to hydrate mindfully",
    "Practice gentle back stretches",
    "Do 10 standing forward folds",
    "Write down three things that inspire you",
    "Massage your temples for 1 minute",
"Water a plant",
"Open your window and take in fresh air",
"Read a motivational quote aloud",
"Write down something you're proud of",
"Do 15 jumping jacks",
"Watch the sky for 1 minute",
"Set a timer and focus on one task for 5 minutes",
"Compliment yourself on a recent achievement",
"Eat one raw vegetable",
"Do 10 knee push-ups",
"Try 1-minute silence with closed eyes",
"Wash your face with cold water",
"Do 10 shoulder shrugs",
"Draw something for fun",
"Light a candle or incense stick",
"Hum your favorite tune for 2 minutes",
"Sit in sunlight for 5 minutes",
"Organize your to-do list",
"Unsubscribe from one unnecessary email",
"Wipe your phone screen",
"Rearrange your desk or table",
"Laugh for 30 seconds on purpose",
"Shake out your hands and arms",
"Set a small, achievable goal for the hour",
"Refill your water bottle",
"Look at a photo that makes you happy",
"Listen to bird sounds or nature audio",
"Take a few steps barefoot (if safe)",
"Visualize your ideal future for 2 minutes",
"Wipe one dusty surface",
"Recite your core values",
"Try 1 minute of eye exercise",
"Put on clothes that make you feel good",
"Do 10 standing calf pulses",
"Take 3 minutes to breathe with hand on chest",
"Take a full body stretch lying down",
"Send someone a voice note of encouragement",
"Try a breathing pattern you haven’t used",
"Watch a funny short video",
"Floss your teeth",
"Write down a recent lesson you learned",
"Declutter your wallet or purse",
"Look away from screen and blink slowly for 1 min",
"Reorganize one drawer",
"Trace your hand on paper",
"Watch a motivational reel or short",
"Wash one dish mindfully",
"Brush your hair slowly and gently",
"Write a short message to your future self",
"Cross off one task you've delayed",
"Clean your glasses or sunglasses",
"Practice mindful chewing while eating",
"Sit without distraction and sip water slowly",
"Compliment someone in your head",
"Clean or trim your nails",
"Try 1-minute eye-closed meditation",
"Rearrange app icons to reduce clutter",
"Practice slow arm movements with breath",
"Touch your toes slowly and breathe out",
"Learn one new word",
"Practice a tongue twister",
"Put your phone on Do Not Disturb for 10 min",
"Massage your hands gently",
"Hold a light stretch while listening to music",
"Sit silently and observe sounds around you",
"Watch a motivational animation",
"Write one thing you’d forgive yourself for",
"Visualize someone you love smiling",
"Do one yoga pose for a minute",
"Rehearse your dream in words",
"Sit with your eyes closed and smile softly",
"Write an email you’ve been avoiding",
"Organize your bookmarks or tabs",
"Create a 3-item gratitude list",
"Massage your scalp for 2 minutes",
"Name three emotions you're feeling now",
"Smell something pleasant (spice, perfume, oil)",
"Listen to a positive voice or speaker",
"Try alternate nostril breathing",
"Turn off your phone for 5 minutes",
"Reflect on your biggest challenge this week",
"Compliment your body for what it does",
"Try a balance pose like tree pose for 30 sec",
"Write down one fear and one action against it",
"Draw a smiley face and stick it nearby",
"Walk around your space while counting steps",
"Make a list of your top 3 values",
"Take 3 sips of water with closed eyes",
"Remove one distracting app or tab",
"Say a short prayer or blessing",
"Read a random sentence from a book",
"Touch your heart and say 'I’m doing my best'",
"Revisit one unfinished creative idea",
"Close your eyes and name 5 sounds",
"Do one new movement your body hasn’t done",
"Send a memory to someone via message",
"Observe your breath without trying to control",
"Make a 3-word mantra for your day",
"Whisper something kind to yourself",
"Write down your favorite moment from today",
"Stretch your arms overhead and hold for 10 sec",
"Compliment a stranger or someone online",
"Tidy up 3 things in your room",
"Slow down and savor your next sip of drink",
"Write a list of what you’re excited about",
"Take one long, conscious breath before replying",
"Look in the mirror and say 'I accept myself'",
"Write down your current focus word",
"Lightly tap your body to stimulate circulation",

];

// Array of motivational quotes
const motivationalQuotes = [
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Small daily improvements are the key to staggering long-term results. - Robin Sharma",
    // ... (rest of the quotes)
];

// Application state
let progressCount = 0;
let currentHabitIndex = -1;
let currentQuoteIndex = -1;

// DOM elements
const habitText = document.getElementById('habit-text');
const quoteText = document.getElementById('quote-text');
const habitButton = document.getElementById('habit-button');
const habitContainer = document.getElementById('habit-container');
const progressCountElement = document.getElementById('progress-count');
const progressSteps = document.querySelectorAll('.progress-step');
const themeSwitch = document.getElementById('theme-switch');

// Audio element for sound
let dingSound;
let celebrationSound;

// Initialize the application
function init() {
    // Create audio element
    dingSound = new Audio('ding.mp3');
    celebrationSound = new Audio('celebration.mp3');
    dingSound.preload = 'auto';
    celebrationSound.preload = 'auto';

    // Set up event listeners
    habitButton.addEventListener('click', showNewHabit);
    themeSwitch.addEventListener('change', toggleTheme);

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeSwitch.checked = savedTheme === 'dark';
    }

    // Load saved progress
    const savedProgress = localStorage.getItem('progressCount');
    if (savedProgress) {
        progressCount = parseInt(savedProgress);
        updateProgressBar();
    }

    // Load saved habit and quote
    const savedHabit = localStorage.getItem('currentHabit');
    const savedQuote = localStorage.getItem('currentQuote');

    if (savedHabit && savedQuote) {
        habitText.textContent = savedHabit;
        quoteText.textContent = savedQuote;
    } else {
        showNewHabit(); // Only if first time
    }

    console.log('Daily Micro Habit app initialized successfully!');
}

// Get random habit (no immediate repeat)
function getRandomHabit() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * microHabits.length);
    } while (newIndex === currentHabitIndex && microHabits.length > 1);

    currentHabitIndex = newIndex;
    return microHabits[newIndex];
}

// Get random quote (no immediate repeat)
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * motivationalQuotes.length);
    } while (newIndex === currentQuoteIndex && motivationalQuotes.length > 1);

    currentQuoteIndex = newIndex;
    return motivationalQuotes[newIndex];
}

// Play sound
function playSound() {
    try {
        dingSound.currentTime = 0;
        const playPromise = dingSound.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Audio play failed:', error);
            });
        }
    } catch (error) {
        console.log('Audio playback error:', error);
    }
}

// Animate habit container
function animateHabitContainer() {
    habitContainer.classList.remove('animate-fade-in', 'animate-bounce');
    habitContainer.offsetHeight;
    const animations = ['animate-fade-in', 'animate-bounce'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    habitContainer.classList.add(randomAnimation);

    setTimeout(() => {
        habitContainer.classList.remove(randomAnimation);
    }, 1000);
}

// Update progress bar
function updateProgressBar() {
    progressCountElement.textContent = progressCount;

    progressSteps.forEach((step, index) => {
        if (index < progressCount) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    });

    localStorage.setItem('progressCount', progressCount.toString());
}

// Show new habit
function showNewHabit() {
    const newHabit = getRandomHabit();
    const newQuote = getRandomQuote();

    habitText.textContent = newHabit;
    quoteText.textContent = newQuote;

    // Save habit and quote to localStorage
    localStorage.setItem('currentHabit', newHabit);
    localStorage.setItem('currentQuote', newQuote);

    playSound();
    animateHabitContainer();

    progressCount++;
    if (progressCount > 7) {
        progressCount = 0;
        setTimeout(() => {
            showCelebration();
        }, 600);
    }

    updateProgressBar();
}

// Show celebration message
function showCelebration() {
    const originalText = habitText.textContent;
    habitText.textContent = "🎉 Congratulations! You've completed a full cycle! 🎉";

       try {
        celebrationSound.currentTime = 0;
        celebrationSound.play().catch(err => {
            console.log('Celebration sound error:', err);
        });
    } catch (err) {
        console.log('Error playing celebration sound:', err);
    }
    setTimeout(() => {
        habitText.textContent = originalText;
    }, 2000);
}

// Toggle light/dark theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Global error logging
window.addEventListener('error', function (e) {
    console.log('Application error:', e.error);
});

// Init when DOM ready
window.addEventListener('DOMContentLoaded', function () {
    init();
});

// Keyboard support
document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === habitButton) {
        e.preventDefault();
        showNewHabit();
    }

    if (e.key === 't' || e.key === 'T') {
        themeSwitch.checked = !themeSwitch.checked;
        toggleTheme();
    }
});

// Button interaction visuals
habitButton.addEventListener('mousedown', function () {
    this.style.transform = 'translateY(-1px) scale(0.98)';
});
habitButton.addEventListener('mouseup', function () {
    this.style.transform = '';
});
habitButton.addEventListener('mouseleave', function () {
    this.style.transform = '';
});
habitButton.addEventListener('touchstart', function (e) {
    e.preventDefault();
    this.style.transform = 'translateY(-1px) scale(0.98)';
});
habitButton.addEventListener('touchend', function (e) {
    e.preventDefault();
    this.style.transform = '';
    showNewHabit();
});
habitButton.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

console.log('Daily Micro Habit script loaded successfully!');
