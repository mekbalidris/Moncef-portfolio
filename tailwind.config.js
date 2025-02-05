export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          pacifico: ["Pacifico", "cursive"], 
          poppins: ["Poppins"],
        },
        screens:{
          mid: '750px',
        }
      },
    },
    plugins: [],
};