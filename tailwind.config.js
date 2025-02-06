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
          phone: '900px',
        }
      },
    },
    plugins: [],
};