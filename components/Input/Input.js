export const createSearchInput = () => {
    const exploreContainer = document.createElement('div');
    exploreContainer.id = 'exploreContainer';
  
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('InputContainer');
  
    const input = document.createElement('input');
    input.placeholder = 'e.g.: flowers, morning...';
    input.id = 'input';
    input.classList.add('input');
    input.name = 'text';
    input.type = 'text';
  
    inputContainer.appendChild(input);
    exploreContainer.appendChild(inputContainer);
  
    return exploreContainer;
  };
  
  