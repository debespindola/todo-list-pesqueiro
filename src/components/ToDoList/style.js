import styled from 'styled-components';

const Container = styled.body`
  margin: 0;
  padding: 0;

  background-color: rgb(42, 46,67);

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 10rem;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 33%;

  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 66%;
  } 
`;

const Input = styled.input`
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(243, 88, 60);
  
  font-size: 1.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: lighter;
  
  width: 100%;  

  ::placeholder{
  color: rgba(255, 255, 255, 0.4);
  }
`;

const CreateButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: rgba(243, 88, 60, 0.7);

  outline: none;

  font-size: 1rem;
`;

const CompletedButton  = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: rgb(17, 140, 182);

  outline: none;

  font-size: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  
  margin-left: 0;
  padding: 0;
  width: 33%;

  @media (max-width: 1024px) {
    width: 66%;
  }
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 0.02px rgba(17, 140, 182, 0.2);

`;

const Item = styled.li`
  color: white;
`;


export {
  Container,
  Header,
  Logo,
  Section,
  Form,
  Input,
  CreateButton,
  CompletedButton,
  List,
  Task,
  Item,
};
