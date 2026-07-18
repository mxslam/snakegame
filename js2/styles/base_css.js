function base_css() {
  insert_style(`* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #game {
      position: relative;
      background: rgb(4, 9, 148);
    }
    #player {
      position: absolute;
      background: rgb(220, 12, 12);
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }

    #chips {
      position: absolute;
      background: rgb(192, 182, 66);
      width: 50px;
      height: 50px;
      border-radius: 40px;
    }

    #grid {
      display: flex;
      position: relative;
      width: 800px;
      height: 600px;
      position: absolute;
    }

    #gridElement {
      position: absolute;
      width: 50px;
      height: 50px;
      border: 1px solid rgb(28, 2, 38);
    }
    #hud {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 10px;
      z-index: 109;
      left: 450px;
    }
    #hud label {
      font-size: 20px;
    }  
    `);
}
export default base_css;
