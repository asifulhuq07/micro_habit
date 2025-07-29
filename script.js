// Array of 100+ unique micro habits
const microHabits = [
    "Drink a glass of water",
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
    "Write down three things that inspire you"
];

// Array of motivational quotes
const motivationalQuotes = [
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Small daily improvements are the key to staggering long-term results. - Robin Sharma",
    "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
    "A year from now you may wish you had started today. - Karen Lamb",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Don't wait for opportunity. Create it. - George Bernard Shaw",
    "Progress, not perfection, is the goal. - Unknown",
    "Every expert was once a beginner. - Helen Hayes",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "You don't have to be great to get started, but you have to get started to be great. - Les Brown"
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

// Initialize the application
function init() {
    // Create audio element
    dingSound = new Audio('ding.mp3');
    dingSound.preload = 'auto';
    
    // Set up event listeners
    habitButton.addEventListener('click', showNewHabit);
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeSwitch.checked = savedTheme === 'dark';
    }
    
    // Load saved progress if exists
    const savedProgress = localStorage.getItem('progressCount');
    if (savedProgress) {
        progressCount = parseInt(savedProgress);
        updateProgressBar();
    }
    
    console.log('Daily Micro Habit app initialized successfully!');
}

// Function to get a random habit (avoiding immediate repeats)
function getRandomHabit() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * microHabits.length);
    } while (newIndex === currentHabitIndex && microHabits.length > 1);
    
    currentHabitIndex = newIndex;
    return microHabits[newIndex];
}

// Function to get a random quote (avoiding immediate repeats)
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * motivationalQuotes.length);
    } while (newIndex === currentQuoteIndex && motivationalQuotes.length > 1);
    
    currentQuoteIndex = newIndex;
    return motivationalQuotes[newIndex];
}

// Function to play sound
function playSound() {
    try {
        dingSound.currentTime = 0; // Reset to beginning
        const playPromise = dingSound.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Audio play failed:', error);
                // Handle autoplay restrictions gracefully
            });
        }
    } catch (error) {
        console.log('Audio playback error:', error);
    }
}

// Function to animate the habit container
function animateHabitContainer() {
    // Remove existing animation classes
    habitContainer.classList.remove('animate-fade-in', 'animate-bounce');
    
    // Force reflow to ensure classes are removed
    habitContainer.offsetHeight;
    
    // Add animation class
    const animations = ['animate-fade-in', 'animate-bounce'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    habitContainer.classList.add(randomAnimation);
    
    // Remove animation class after completion
    setTimeout(() => {
        habitContainer.classList.remove(randomAnimation);
    }, 1000);
}

// Function to update progress bar
function updateProgressBar() {
    // Update progress count display
    progressCountElement.textContent = progressCount;
    
    // Update progress steps
    progressSteps.forEach((step, index) => {
        if (index < progressCount) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    });
    
    // Save progress to localStorage
    localStorage.setItem('progressCount', progressCount.toString());
}

// Function to show new habit
function showNewHabit() {
    // Get new habit and quote
    const newHabit = getRandomHabit();
    const newQuote = getRandomQuote();
    
    // Update text content
    habitText.textContent = newHabit;
    quoteText.textContent = newQuote;
    
    // Play sound
    playSound();
    
    // Animate the container
    animateHabitContainer();
    
    // Update progress
    progressCount++;
    
    // Reset progress if it reaches 7
    if (progressCount > 7) {
        progressCount = 0;
        
        // Add celebration effect for completing a cycle
        setTimeout(() => {
            showCelebration();
        }, 600);
    }
    
    // Update progress bar
    updateProgressBar();
}

// Function to show celebration
function showCelebration() {
    // Create celebration message
    const originalText = habitText.textContent;
    habitText.textContent = "🎉 Congratulations! You've completed a full cycle! 🎉";
    
    // Restore original text after 3 seconds
    setTimeout(() => {
        habitText.textContent = originalText;
    }, 3000);
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add smooth transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Handle errors gracefully
window.addEventListener('error', function(e) {
    console.log('Application error:', e.error);
});

// Handle audio loading errors
window.addEventListener('DOMContentLoaded', function() {
    // Initialize when DOM is ready
    init();
    
    // Show initial habit and quote
    showNewHabit();
});

// Add keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Allow Enter or Space to trigger the habit button
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === habitButton) {
        e.preventDefault();
        showNewHabit();
    }
    
    // Allow 't' key to toggle theme
    if (e.key === 't' || e.key === 'T') {
        themeSwitch.checked = !themeSwitch.checked;
        toggleTheme();
    }
});

// Add visual feedback for button interactions
habitButton.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(-1px) scale(0.98)';
});

habitButton.addEventListener('mouseup', function() {
    this.style.transform = '';
});

habitButton.addEventListener('mouseleave', function() {
    this.style.transform = '';
});

// Add touch support for mobile devices
habitButton.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.style.transform = 'translateY(-1px) scale(0.98)';
});

habitButton.addEventListener('touchend', function(e) {
    e.preventDefault();
    this.style.transform = '';
    showNewHabit();
});

// Prevent context menu on long press for better mobile UX
habitButton.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

console.log('Daily Micro Habit script loaded successfully!');