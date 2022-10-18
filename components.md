# Data Layer

## Data

- An array with 6 random words
- An array with the a hidden word letters
- An array with all english letters
- An array that will contain the used letters
- A variable that count mistakes

## Data modification

- Set the hidden word letters from one random words
- When an english letter is clicked:
  - Put inside used letters if not already
  - Check if hidden word contains this letter
    - If not mistakes increment
    - If exists in it but it's already shown mistakes increment
    - If exists in it and it's hidden show the letter

# Components

## App

### Show Data

- A used letters component
- A hangman component
- A hidden word component
- A Info component
- A List of english letters

## UsedLetters

### Show Data

- A list of letters already used

## Letter

### Show Data

- The letter that receives

### Get Actions

- The received action on click

## HiddenWord

### Show Data

- Display the total number of letters from hidden word in underscores

## Info

### Show Data

- When game ends show a message:
  - "You're dead!" If fails
  - "You're alive!" If player wins

## Hangman

### Show Data

- Displays a hangman depending on total mistakes
