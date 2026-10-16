// 1. تغيير نص "مين أنا"
const changeTextBtn = document.getElementById('changeTextBtn');
const aboutText = document.getElementById('about-text');

const aboutTexts = [
    "أنا متعلم برمجة وبتعلم تطوير الويب",
    "بحب أتعلم حاجات جديدة كل يوم",
    "هدفي أصبح مطور ويب محترف",
    "بشتغل على مشاريع عملية عشان أتطور"
];

let currentTextIndex = 0;

changeTextBtn.addEventListener('click', function() {
    currentTextIndex = (currentTextIndex + 1) % aboutTexts.length;
    aboutText.textContent = aboutTexts[currentTextIndex];
});

// 2. تغيير الهدف
const changeGoalBtn = document.getElementById('changeGoalBtn');
const goalText = document.getElementById('goal-text');

const goals = [
    "أتعلم HTML, CSS, JavaScript",
    "أبني أول موقع كامل بنفسي",
    "أتعلم React أو Vue",
    "أشتغل كمطور ويب محترف"
];

let currentGoalIndex = 0;

changeGoalBtn.addEventListener('click', function() {
    currentGoalIndex = (currentGoalIndex + 1) % goals.length;
    goalText.textContent = goals[currentGoalIndex];
});

// 3. عرض الوقت الحالي
const showTimeBtn = document.getElementById('showTimeBtn');
const timeText = document.getElementById('time-text');

showTimeBtn.addEventListener('click', function() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeText.textContent = `${hours}:${minutes}:${seconds}`;
});

// 4. تحديث الوقت كل ثانية
setInterval(function() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeText.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

// 5. رسالة في الكونسول
console.log("🎉 مبروك! أول موقع لك شغال");