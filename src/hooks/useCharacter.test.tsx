import { useCharacter } from './useCharacter';
import { renderHook, act } from '@testing-library/react';

test('should set the name of a new character', () => {
  const { result } = renderHook(() => useCharacter('Teste'));

  expect(result.current.name).toBe('Teste');
});

test('character moves to the left', () => {
  const { result } = renderHook(() => useCharacter('Teste'));

  act(() => {
    result.current.moveLeft();
  });
  expect(result.current.side).toBe('left');
});

test('character moves to the right', () => {
  const { result } = renderHook(() => useCharacter('Teste'));

  act(() => {
    result.current.moveRight();
  });
  expect(result.current.side).toBe('right');
});

test('character moves up', () => {
  const { result } = renderHook(() => useCharacter('Teste'));

  act(() => {
    result.current.moveUp();
  });
  expect(result.current.side).toBe('up');
});

test('character moves down', () => {
  const { result } = renderHook(() => useCharacter('Teste'));

  act(() => {
    result.current.moveDown();
  });
  expect(result.current.side).toBe('down');
});
