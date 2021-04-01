import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}



// const messagesWithTransitions = useTransition(
//   messages,
//   (message:any) => message.id,
//   {
//     from: { right: "-120%", opacity: 0 },
//     enter: { right: '0%', opacity: 1 },
//     leave: { right: '-120%', opacity: 1 },
//   },
// );

// console.log('messagesWithTransitions',messagesWithTransitions)
// return (
//   <Container>
//    {messagesWithTransitions.map(({ item, key, props }) => (
//       <Toast key={key} style={props} message={item} />
//     ))}
//   </Container>
// );
// };


const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer
