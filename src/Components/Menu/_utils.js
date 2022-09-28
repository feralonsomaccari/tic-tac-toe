const alphanumeric = /[^0-9a-zA-Z]/; // Alphanumeric

const validateNames = (player1Name, player2Name) => {
  if (!player1Name.length || !player2Name.length) return false;
  if (player1Name === player2Name) return false;
  if (alphanumeric.test(player1Name) || alphanumeric.test(player1Name))
    return false;
  return true;
};

module.exports = { validateNames };
