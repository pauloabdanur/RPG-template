import { useEffect } from 'react';
import { Container, Map } from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Thalita');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
    }
  };

  return (
    <Container>
      <Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
      </Map>
    </Container>
  );
};

export default App;
