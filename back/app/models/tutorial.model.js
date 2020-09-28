try{
    module.exports = (sequelize, Sequelize) => {
        const Tutorial = sequelize.define("tutorial", {
          title: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          published: {
            type: Sequelize.BOOLEAN
          }
        });
      
        return Tutorial;
      };
}
catch(err){
    console.log("Error Connecting to the Database, Check password and username and try running again")

}