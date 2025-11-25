// משימת כיתה – שימוש בתנאים, לולאות ופונקציות
// פתחו את ה־Console (F12 → Console) כדי לראות חלק מהתוצאות.

// 1️⃣ מחולל מספרים זוגיים
// משימה: לקרוא את המספר מה־input עם id="even-limit"
// לעשות לולאת for מ-1 עד המספר
// להשתמש ב-if כדי לבדוק אם מספר זוגי (שימוש ב-%)
// להציג את כל המספרים הזוגיים ב-div עם id="even-output"
// וגם להדפיס אותם ל-console
function handleEvenNumbers() {
    const limitInput = document.getElementById("even-limit");
    const output = document.getElementById("even-output");

    // TODO: לקרוא את הערך מה־input ולהפוך אותו למספר

    // TODO: לבדוק אם הערך תקין (לא ריק, מספר גדול מ-1)
    // אם לא תקין – להציג הודעת שגיאה ב-output ולהחזיר מהפונקציה.

    // TODO: ליצור מחרוזת ריקה, לולאת for מ-1 עד המספר,
    // ואם המספר זוגי – להוסיף אותו למחרוזת ולהדפיס ל-console.

    // TODO: להציג את המחרוזת ב-output.innerText
}

// 2️⃣ מחשבון הודעות ציון עם switch
// כתבו פונקציה שמקבלת grade ומחזירה הודעה מתאימה בעזרת switch.
function getGradeMessage(grade) {
    // TODO:
    // 1. להפוך את grade לאות גדולה (toUpperCase)
    // 2. להשתמש ב-switch:
    //    case "A": להחזיר "מצוין!"
    //    case "B": להחזיר "טוב מאוד!"
    //    case "C": להחזיר "בסדר, יש מקום לשיפור"
    //    case "D": להחזיר "עבר, אבל שווה להתאמץ יותר"
    //    case "F": להחזיר "לא עברת, אל תתייאש!"
    //    default: להחזיר "ציון לא תקין"
}

// פונקציה שמופעלת כשלוחצים על הכפתור
function handleGrade() {
    const select = document.getElementById("grade-select");
    const output = document.getElementById("grade-output");

    const grade = select.value;

    // TODO:
    // אם לא נבחר כלום (grade ריק) – להציג הודעה למשתמש לבחור ציון ולהחזיר.

    // TODO:
    // לקרוא ל-getGradeMessage(grade) ולשמור את התוצאה במשתנה

    // TODO:
    // להציג את ההודעה גם ב-output וגם ב-console.log
}

// 3️⃣ סכום מספרים שמתחלקים ב־3 או 5
// משימה: לקבל מספר עליון מה־input עם id="sum-limit"
// לחשב את סכום כל המספרים בין 1 לבין המספר העליון שמתחלקים ב-3 או 5
// ולהציג את הסכום
function handleSum() {
    const limitInput = document.getElementById("sum-limit");
    const output = document.getElementById("sum-output");

    // TODO:
    // 1. לקרוא את הערך ולהפוך למספר
    // 2. לבדוק תקינות (גדול מ-1)
    // 3. ליצור משתנה sum=0
    // 4. לולאת for מ-1 עד המספר
    // 5. אם המספר מתחלק ב-3 או 5 → להוסיף ל-sum
    // 6. להציג את התוצאה ב-output וב-console
}

// 4️⃣ חיפוש מספר במערך עם while
// יש מערך מספרים קבוע:
const NUMBERS_LIST = [1, 5, 10, 20, 42, 50, 100];

// משימה: לעבור על המערך עם while ולחפש את המספר 42.
// אם נמצא – להציג באיזה אינדקס.
// אם לא – להציג הודעה שלא נמצא.
function handleFind() {
    const output = document.getElementById("find-output");

    // TODO:
    // 1. ליצור משתנה index שמתחיל ב-0
    // 2. ליצור משתנה found שמתחיל ב-false
    // 3. לולאת while שרצה כל עוד index קטן מאורך המערך ו-found === false
    // 4. אם NUMBERS_LIST[index] === 42 → found=true ולהציג הודעה
    // 5. אם הלולאה הסתיימה ועדיין found=false → להציג שלא נמצא
    // 6. להדפיס את ההודעות גם ב-console
}

// 5️⃣ סינון מספרים זוגיים ממערך
// משימה: לכתוב פונקציה שמקבלת מערך ומחזירה מערך חדש עם כל המספרים הזוגיים.
function getEvenNumbersFromArray(arr) {
    // TODO:
    // 1. ליצור מערך חדש ריק, למשל: const evens = [];
    // 2. לולאת for שעוברת על כל האיברים
    // 3. אם arr[i] זוגי → לדחוף אותו למערך evens
    // 4. בסוף להחזיר את evens
}

function handleEvenArray() {
    const output = document.getElementById("even-array-output");

    // מערך לדוגמה – אפשר לשנות / להרחיב:
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // TODO:
    // 1. לקרוא לפונקציה getEvenNumbersFromArray(numbers)
    // 2. לשמור את התוצאה במשתנה
    // 3. להציג את המספרים הזוגיים ב-output (כמחרוזת) וגם ב-console.log
}

// חיבור הכפתורים מה-HTML לפונקציות
document.getElementById("btn-even").addEventListener("click", handleEvenNumbers);
document.getElementById("btn-grade").addEventListener("click", handleGrade);
document.getElementById("btn-sum").addEventListener("click", handleSum);
document.getElementById("btn-find").addEventListener("click", handleFind);
document.getElementById("btn-even-array").addEventListener("click", handleEvenArray);
