import { Component } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {

  questions = [
    {
      question: '1. Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: 3 //'Answer: <b>'
    },
    {
      question: '2. Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>', '<pre>'],
      answer: 1 //'Answer: <br>'
    },
    {
      question: '3. How to create a hyperlink in HTML?',
      options: ['<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>', 
      '<a> www.thinkandlearn.com <thinkandlearn.com /a>',
       '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        '<a url = “www.thinkandlearn.com” thinkandlearn.com /a>'],
      answer: 2 // 'Answer: <a href = “www.thinkandlearn.com”> thinkandlearn.com </a> '
    },

    {
      question: '4. In HTML, how do we insert an image?        ',
      options: ['<img src = “jtp.png” />', 
      '<img href = “jtp.png” />        ',
       '<img link = “jtp.png” />         ',
        '<img url = “jtp.png” />          '],
      answer:0 // 'Answer: (a) <img src = “jtp.png” />        '
    },

    {
      question: '5. Which tag do we use to define the options present in the drop-down selection lists?        ',
      options: ['<list> ', 
      '<option>        ',
       '<dropdown>         ',
        '<select> '],
      answer:  1 // 'Answer: (b) <option>        '
    },


  ];

  selectedAnswers: (number | null)[] = new Array(this.questions.length).fill(null);
 
  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  isQuestionnaireComplete = false;
  isAnswerChecked = false;
  isAnswerCorrect = false;

  correctAnswers: number | undefined;
  totalQuestions: number | undefined;
  scorePercentage: number | undefined;



  nextQuestion() {
    // Save the selected answer for the current question
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedOptionIndex;
  
    this.currentQuestionIndex++;
    this.selectedOptionIndex = null;
    this.isAnswerChecked = false;
  
    if (this.currentQuestionIndex === this.questions.length) {
      this.isQuestionnaireComplete = true;
    }
  }
  
  previousQuestion() {
    // Save the selected answer for the current question
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedOptionIndex;
  
    this.currentQuestionIndex--;
    this.selectedOptionIndex = this.selectedAnswers[this.currentQuestionIndex] || null;
    this.isAnswerChecked = false;
  
    this.isQuestionnaireComplete = false;
  }

  // nextQuestion() {
  //   this.currentQuestionIndex++;
  //   this.selectedOptionIndex = null;
  //   this.isAnswerChecked = false;

  //   if (this.currentQuestionIndex === this.questions.length) {
  //     this.isQuestionnaireComplete = true;
  //   }
  // }

  // previousQuestion() {
  //   this.currentQuestionIndex--;
  //   this.selectedOptionIndex = null;
  //   this.isAnswerChecked = false;

  //   this.isQuestionnaireComplete = false;
  // }


  submitQuiz() {
    let correctAnswers = 0;
    for (const question of this.questions) {
      if (this.selectedOptionIndex !== null && this.selectedOptionIndex === question.answer) {
        correctAnswers++;
      }
    }

    

    const totalQuestions = this.questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    this.correctAnswers = correctAnswers; 
    this.totalQuestions = totalQuestions; 
    this.scorePercentage = scorePercentage; 

    

    this.isQuestionnaireComplete = true; 
  


  // const totalQuestions = this.questions.length;
   // const scorePercentage = (correctAnswers / totalQuestions) * 100;

   // console.log('Correct answers:', correctAnswers);
    //console.log('Total questions:', totalQuestions);
    //console.log('Quiz score:', scorePercentage);

  }
}
