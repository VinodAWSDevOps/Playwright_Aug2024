function gradeCal(score) {
    switch (true) {
        case (score <= 100 && score >= 85):
            console.log("Grade A")
            break;
        case (score <= 84 && score >= 60):
            console.log("Grade B")
            break;
        case (score <= 59 && score >= 35):
            console.log("Grade C")
            break;
        case (score <= 34 && score >= 32):
            console.log("Grade D")
            break;
        default:
            console.log("Grade E")
    }
}
let score
gradeCal(40)