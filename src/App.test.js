
import { shallow, mount } from 'enzyme';
import App from './App';
import UserInput from './components/userInput';
import Todos from './components/todo'

describe("To do app testing", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
   // console.log(wrapper.debug());
  })
  let wrapper2 = shallow(<UserInput/>)

  test("render of the title", () => {
    expect(wrapper.find('h1').text()).toContain('To-Do App');
  })
  test("render of UserInput component", () => {
    expect(wrapper.contains(<UserInput/>)).toEqual(true)
  })
  test("UserInput Component should contain subtitle text", () => {
    // const wrapper2 = shallow(<UserInput/>)
    expect(wrapper2.find('#subtitile').text()).toContain('Add new To Do');
  })
  test("in user Input render initial state of inputt state text", () => {
    // const wrapper2 = shallow(<UserInput/>)
    const input = wrapper2.find('input')
    input.props().onChange({target : {
        text: "0",
        todo : []
    }})    
  })

  test("render the click event of add button value", () => {
    const input = wrapper2.find('input')
    input.props().onChange({target : {
        value: "apple"
    }})  
    wrapper2.find('#add').simulate("click")
    expect(wrapper2.find('input').prop('value')).toEqual("apple")
  })
  test("show newly added todo",() => {
    const todoWrapper = shallow(<Todos/>)
  })
})

