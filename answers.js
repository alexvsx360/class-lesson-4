// משימת כיתה – שימוש בתנאים, לולאות ופונקציות
// פתחו את ה־Console (F12 → Console) כדי לראות חלק מהתוצאות.

// 1️⃣ מחולל מספרים זוגיים
function handleEvenNumbers() {
    const limitInput = document.getElementById("even-limit");
    const output = document.getElementById("even-output");

    let limit = Number(limitInput.value);

    if (!limit || limit < 2) {
        output.innerText = "❌ שגיאה: יש להזין מספר גדול מ-1.";
        return;
    }

    let result = "";

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            result += i + " ";
            console.log(i);
        }
    }

    output.innerText = result === "" ? "לא נמצאו מספרים זוגיים." : result;
}

// 2️⃣ מחשבון הודעות ציון עם switch
function getGradeMessage(grade) {
    const g = grade.toUpperCase();

    switch (g) {
        case "A":
            return "מצוין! 🎉";
        case "B":
            return "טוב מאוד! 👍";
        case "C":
            return "בסדר, יש מקום לשיפור 🙂";
        case "D":
            return "עבר, אבל כדאי להתאמץ יותר 💪";
        case "F":
            return "לא עברת, אבל אל תוותר! 📘";
        default:
            return "❌ ציון לא תקין. השתמשו באותיות: A,B,C,D,F";
    }
}

function handleGrade() {
    const select = document.getElementById("grade-select");
    const output = document.getElementById("grade-output");

    const grade = select.value;

    if (grade === "") {
        output.innerText = "❌ יש לבחור ציון.";
        return;
    }

    const message = getGradeMessage(grade);
    output.innerText = message;
    console.log("הודעה:", message);
}

// 3️⃣ סכום מספרים שמתחלקים ב־3 או 5
function handleSum() {
    const limitInput = document.getElementById("sum-limit");
    const output = document.getElementById("sum-output");

    let limit = Number(limitInput.value);

    if (!limit || limit < 1) {
        output.innerText = "❌ יש להזין מספר גדול מ-1.";
        return;
    }

    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    output.innerText = `הסכום הוא: ${sum}`;
    console.log("הסכום הוא:", sum);
}

// 4️⃣ חיפוש מספר במערך עם while
const NUMBERS_LIST = [1, 5, 10, 20, 42, 50, 100];

function handleFind() {
    const output = document.getElementById("find-output");

    let index = 0;
    let found = false;

    while (index < NUMBERS_LIST.length && !found) {
        if (NUMBERS_LIST[index] === 42) {
            found = true;
            output.innerText = `🎯 המספר 42 נמצא באינדקס ${index}`;
            console.log(`מצאתי את 42 באינדקס ${index}`);
        }
        index++;
    }

    if (!found) {
        output.innerText = "❌ המספר 42 לא נמצא במערך.";
        console.log("לא נמצא 42 במערך.");
    }
}

// 5️⃣ סינון מספרים זוגיים ממערך
function getEvenNumbersFromArray(arr) {
    const evens = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }

    return evens;
}

function handleEvenArray() {
    const output = document.getElementById("even-array-output");

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evens = getEvenNumbersFromArray(numbers);

    output.innerText = `המספרים הזוגיים הם: ${evens.join(", ")}`;
    console.log("מספרים זוגיים:", evens);
}


// חיבור הכפתורים מה־HTML לפונקציות
document.getElementById("btn-even").addEventListener("click", handleEvenNumbers);
document.getElementById("btn-grade").addEventListener("click", handleGrade);
document.getElementById("btn-sum").addEventListener("click", handleSum);
document.getElementById("btn-find").addEventListener("click", handleFind);
document.getElementById("btn-even-array").addEventListener("click", handleEvenArray);
