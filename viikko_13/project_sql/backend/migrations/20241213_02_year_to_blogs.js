const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    //await queryInterface.addColumn(TAULU, UUSI_KENTTÄ, {type: TYYPPI, defaultValue: ARVO})  
    await queryInterface.addColumn('blogs', 'year', {
      type: DataTypes.INTEGER,
      validate: {
        //https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        customValidator(value) {
            console.log('VALUE TO VALIDATOR IS: ', value)
            let current = new Date().getFullYear()
            if (value < 1991 || value > current) {
                throw new Error("YEAR HAS TO BE BETWEEN 1991 and CURRENT_YEAR");
            }
        },
      },
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('blogs', 'year')
  },
}
