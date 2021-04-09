const a = 'promotionper<!-- email@protection -->sonal<span class="spamprotection">PROTECTIONVSBOTS</span>';
const b = 'gm<!-- @protection.com -->ail.com';
const c = '<i class="fas fa-paper-plane"></i>&nbsp;&nbsp;';

const emailParagraphOne = document.getElementById('email1');
const emailParagraphTwo = document.getElementById('email2');
const emailParagraphThree = document.getElementById('email3');

const insertEmail = () => {
  emailParagraphOne.innerHTML = c + a + '@' + b;
  emailParagraphTwo.innerHTML = a + '@' + b;
  emailParagraphThree.innerHTML = a + '@' + b;
};

export { insertEmail };
