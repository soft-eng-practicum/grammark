import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AcademicStyleService {

  //variables for non academic style scoring
  private academicStyleAlertColor = new BehaviorSubject<string>(" ");
  currentAcademicStyleAlertColor = this.academicStyleAlertColor.asObservable();
  
  private academicStyleFeedback = new BehaviorSubject<string>(" ");
  currentAcademicStyleFeedback = this.academicStyleFeedback.asObservable();
  
  private academicStyleScore = new BehaviorSubject<number>(0);
  currentAcademicStyleScore = this.academicStyleScore.asObservable();
  
  private sentences = new BehaviorSubject<number>(0);
  currentTotalSentences = this.sentences.asObservable();
  
  private totalNonAcademic = new BehaviorSubject<number>(0);
  currentTotalNonAcademic = this.totalNonAcademic.asObservable();

  // Non Academic Style Error List
  private academicStyleTableSource = new BehaviorSubject<any>({
    // casual language & feedback
  'plenty of':'a great deal of /numerous/ several',
  'loads of':'a great deal of /numerous/ several',
  'a bit':'somewhat (before adj. or adv.)/ slightly',
  'get together':'collaborate with',
  'big':'large (number/percentage) / considerable',
  'thing':'device/object',
  'stuff':'material',
  'find out':'ascertain/discover',
  'do again':'repeat',
  'set up':'establish',
  'cut down on':'reduce',
  'go up':'increase',
  'come up with':'create',
  'look into':'investigate',
  'go up and down':'fluctuate',
  'brings up the question':'raises the question',
  'get rid of':'eliminate',
  'turn down':'refuse',
  'take back':'retract',
  'put off':'postpone/delay',
  'put up with':'tolerate',
  'put away':'save',
  'put down':'attribute / insult',
  'give up':'relinquish / surrender',
  'go back':'return to',
  'give back':'return',
  'give off':'produce',
  'give away':'betray / donate',
  'carry out':'conduct',
  'help':'assist/ aid',
  'in the end':'finally/ultimately',
  'at once':'immediately',
  'at the same time':'simultaneously/ concurrently',
  'at first':'initially',
  'on and off':'intermittently',
  'mainly':'principally/primarily',
  'next':'subsequently/subsequent/following',
  'again and again':'repeatedly',
  'understanding':'comprehension / comprehending',
  'in charge of':'responsible for',
  'enough':'sufficient',
  'better':'superior to',
  'more and more':'Increasingly/ unceasingly/non-stop',
  'bad':'disappointing / negative',
  'get worse':'deteriorate',
  'horrible':'unacceptable',
  'come in':'to enter',
  'talk about':'discuss',
  'look at':'examine',
  'pin down':'determine',
  'let’s consider':'it is important to consider',
  'I like':'avoid first person',
  'I don\'t like':'avoid first person / or if necessary "personally I dislike"',
  'on top of that':'another point is / furthermore / similarly',
  'in a nutshell':'briefly / in short / basically',
  'by chance':'incidentally / accidentally',
  'by accident':'accidentally',
  'kids':'infants / offspring / children / teens',
  'O.K':'acceptable/ satisfactory',
  'okay':'acceptable / satisfactory',
  'make up for':'compensate for',
  'get in touch with':'contact',
  'let somebody know':'inform someone',
  'call off':'cancel',
  'sort out':'resolve',
  'deal with':'handle / address',
  'to think of':'to conceive of/ to imagine',
  'keep up':'maintain',
  'a lot':'a substantial amount',
  'stand for':'denote',
  'the same as':'equivalent to',
  'man':'male',
  'guy':'male',
  'old people':'senior citizens / retirees',
  'old person':'senior citizens / retirees',
  'crooks':'offenders / lawbreakers',
  'awesome':'preferable / desirable',
  'sick of':'dissatisfied with',
  'fed up with':'dissatisfied with',
  'I think that':'It seems that / It could be argued that',
  'to go over':'exceed / review',
  'make sure':'ensure',
  'take away':'withdraw / remove',
  'whenever we want':'without prior notice / anytime',
  'whenever we like':'without prior notice / anytime',
  'one after the other':'regularly',
  'big differences':'significant differences',
  'this shows that':'this seems to demonstrate that',
  'etc.':'Delete / among other examples',
  'and so forth':'Delete / among other examples',
  'and so on':'Delete / among other examples',
  'i.e.':'namely',
  'e.g.':'for example',
  'vs.':'versus/as opposed to',
  'nice':'Avoid / friendly',
  'cute':'Avoid / attractive',
  'smart':'intelligent',
  'tired':'exhausted',
  'drunk':'intoxicated',
  'really':'Avoid, or make more formal by using "extremely"',
  'to go up to':'to reach',
  'come across':'find',
  'do away with':'abolish',
  'build up':'accumulate',
  'finish off':'conclude',
  'poor country':'developing country',
  'that’s why':'for this reason / the reason for',
  'how much':'to what extent',
  'every year':'annually',
  'each year':'annualy',
  'fridge':'refrigerator',
  'TV':'television',
  'boss':'employer',
  'obviously':'Extreme language. Avoid, and use a tenative qualifier like "seems"',
  'totally':'Extreme language. Avoid, and use a tenative qualifier like "seems"',
  'extremely':'Extreme language. Avoid, and use a tenative qualifier like "seems"',
  'stupid':'Avoid unless analyzing the word stupid',
  'clearly':'Extreme language. Avoid, and use a tenative qualifier like "seems"',
  'never':'Extreme language. Avoid, and use a tenative qualifier like "seems"',
  'different':'Vague. Different in what way?',
  'amazing':'Too informal.',
  'kind of':'Vague. Generally try to avoid.',
  'sort of':'Vague. Generally try to avoid.',
  });
  currentAcademicStyleTable = this.academicStyleTableSource.asObservable();

  // nonAcademic Style Current User Errors
  private academicStyleUserTableSource = new BehaviorSubject<any>({});
  currentAcademicStyleUserTable = this.academicStyleUserTableSource.asObservable();

  constructor() { }

  changeAcademicStyleScore(academicStyleScore: number) {
    this.academicStyleScore.next(academicStyleScore);
  }

  changeTotalSentences(totalSentences: number) {
    this.sentences.next(totalSentences);
  }

  changeTotalNonAcademic(totalNonAcademic: number) {
    this.totalNonAcademic.next(totalNonAcademic);
  }

  changeAcademicStyleTable(academicStyleTable: any) {
    this.academicStyleTableSource.next(academicStyleTable);
  }

  changeAcademicStyleUserTable(academicStyleUserTable: any) {
    this.academicStyleUserTableSource.next(academicStyleUserTable);
  }

  changeAcademicStyleFeedback(academicStyleFeedback: string){
    this.academicStyleFeedback.next(academicStyleFeedback);
  }

  changeAcademicStyleAlertColor(academicStyleAlertColor: string){
    this.academicStyleAlertColor.next(academicStyleAlertColor);
  }

  resetAcademicStyleFix(){
    this.academicStyleFeedback.next(" ");
    this.academicStyleScore.next(0);
    this.sentences.next(0);
    this.totalNonAcademic.next(0);
  }
}
