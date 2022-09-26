// ! Logical Operators
// * We use to make decisions based on multiple condition
// In js we have 3 types of logical Operators

// * 1. Logical AND '&&'
// * 2. Logical OR '||'
// * 3. Logical NOT '!'

// ! 1. Logical AND '&&'
// * indicate by two ampersands &&
    // ! Basic Rules
    // * 1. Logical AND (&&)
    // * 2. Returns TRUE if both ampersands are true
        // ? What do I mean by that?
        // * e.g
        console.log(true && true)
        // * So the result of the evaluating this expression will be true
        // * If either of these is false the result will be false
        // * It doesn't matter which one is false or both of them are false we still get false
    
// ! Real world use case !
// ! Approving Loan
// * We want to see if the applicant has "high income" & a good "credit score" then they will be eligible for loan.

let highIncome = true;
let goodCreditScore = false;

// * Dealing with 2 conditions 
// * We want make sure that the applicant has high income and good credit score.
// * That's where we use the logical AND

let eligibleForLoan = highIncome && goodCreditScore
console.log('Eligible for loan? ',eligibleForLoan)

// ! 2. Logical OR '||'
    // * 1. Indicated by two vertical lines (||)
    // * 2. Return true if one of the operands is true
    // It doesn't matter which one left or right as long as one true operand the result will of this expression will be true
let eligibleForLoanOROperator = highIncome || goodCreditScore
console.log('Eligible for loan? ',eligibleForLoanOROperator)

// ! 3. LOGICAL NOT '!'
    // * 1. Indicated by !
    // * e.g if the applicant is not eligible for loan we want to consider the applicant as refused 

let applicantRefuse = !eligibleForLoan
console.log('Applicant is not eligible for loan! ', applicantRefuse)

// ! The above examples was all about boolean values
// ! But in JavaScript we can use these LOGICAL OPERATORS with non-boolean values.
