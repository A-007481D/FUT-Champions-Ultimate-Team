# FUT Ultimate Team Builder

## Project Context
This application allows users to build their FUT (Ultimate Team) by adding, positioning, and editing players while adhering to tactical formations such as 4-4-2 or 4-3-3. The focus is on an interactive experience with dynamic forms, data management using **localStorage**, and an engaging user interface.



## Key Features

### 1. **Dynamic Player Addition**
- A form to add players with fields for:
  - Name
  - Position
  - Rating
  - Statistics and other relevant details
- Positions automatically adapt based on the chosen tactical formation (e.g., 4-3-3 or 4-4-2).

### 2. **Positioning Based on Formation**
- Support for tactical formations:
  - **4-3-3**: GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
  - **4-4-2**: GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST.
- Dynamic adjustment of player positions based on the selected formation.

### 3. **Player Card Management**
- UI for adding, editing, or deleting player cards.
- Strict limit of 11 players for the main formation, with substitutes reserved for changes.

### 4. **Chemistry Calculation (Bonus)**
- Automatic calculation based on predefined rules:
  - Correct position: +10 points.
  - Club link: +3 points.
  - League link: +2 points/player adjacent.
  - Nationality link: +1 point.
- Total score normalized on a scale of 0-100 and displayed.

### 5. **Dynamic Forms and Validation**
- Validation for input fields: name, position, rating, etc.
- Dynamic handling of player addition or removal while respecting formation limits.

### 6. **Local Storage Support (Bonus)**
- Automatic saving of formations and players using **localStorage**.
- Data loaded automatically on app start.

### 7. **Drag & Drop for Reorganization (Bonus)**
- Drag-and-drop functionality to rearrange or replace players.

### 8. **Responsive Design**
- Interface optimized for all screen sizes: mobile, tablet, and desktop.
- Dynamic adjustments to ensure a seamless user experience.

---

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Layout and styling (or frameworks like Tailwind CSS/Bootstrap).
- **Vanilla JavaScript**: For user interaction and DOM manipulation.
---
## Installation and Usage

### Prerequisites
- A modern browser (supporting LocalStorage and ES6).
- Clone the project:
  ```bash
  git clone https://github.com/username/fut-ultimate-team-builder.git
  cd fut-ultimate-team-builder
  ```

### Running the Project
1. Open the `index.html` file in a browser.
2. Interact with the application to create and manage your FUT team.

---
<!--
## Future Features
- API integration to fetch real player statistics.
- Sharing teams via dynamically generated links.
- Advanced visualization of player relationships.

---
-->

## Contribution
Contributions are welcome! Open an *issue* or submit a *pull request* on the [GitHub repository](https://github.com/username/FUT-Ultimate-Team).

---
<!--
## License
This project is licensed under the [MIT License](LICENSE).

-->
