import React from 'react';
import AssessmentComponent from '../components/AssessmentComponent';
import NavigationBarComp from '../components/NavigationBarComp';
import QuestionSectionComp from '../components/QuestionSectionComp';
import QuizComp from "../components/QuizComp";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import { shallowToJson } from 'enzyme-to-json';

it('Test AssessmentComponent...', () => {
  let length = 4;
  let det = {length:length};
  const assessmentComponent = shallow(<AssessmentComponent />);
  expect(shallowToJson(assessmentComponent)).toMatchSnapshot();
});

it('Test NavigationBarComp...', () => {
  let length = 4;
  let det = {length:length};
  const navigationBarComp = shallow(<NavigationBarComp orderNumber='2' answerOptions={det}/>);
  expect(navigationBarComp.find('span').html()).toEqual('<span> Step 2 of 5 </span>');
});

it('Test QuestionSectionComp...', () => {
  let testQuestion = "Test question?";
  let options = [
    "Houston Texans",
    "Jacksonville Jaguars",
    "Pittsburgh Steelers",
    "New England Patriots"
  ];
  const questionSection = shallow(<QuestionSectionComp question={testQuestion} answerOptions={options}/>);
  
  let iCount = 0;
  questionSection.find('button').forEach((node) => {
     let buttonNode = "<button> " + options[iCount++] + " </button>";
     expect(node.html()).toEqual(buttonNode);
  });
});
