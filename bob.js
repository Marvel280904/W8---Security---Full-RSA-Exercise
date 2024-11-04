const crypto = require("crypto");

// alice public key
const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxdey8d8CA5SIX3VYrUwd
8GlvevnZ3XPZm5I4/gExvMe1qGvLipPqOP24EE8lfi5zZkRUGKDmzYTdB4HvvwmD
O1XNdJ4fzmsH8/hPqrt3/z7daW9QN62JxH3+QJh4HnHz0NzM23UelsFAI9+xFzpG
xGCn3NzUGKbPpBwxFKZM6f5Ttz5gzOUXar0sKRoZ+JbOtm+Dre8KLRJpL7KSyWOB
hGsO8blRHPOeqmTELWsmxu+HdI3riruEgLSYw06gLzfdhWT0UEGQz3Ug6VS3dVhq
0H/SQi18R1/+DLmpUg8RT1YKjWcQgX7v7pifsdAd+WtSGFiuiEN+vUjhk2JrRXiH
EQIDAQAB
-----END PUBLIC KEY-----`;

const bobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3edKSelFcS+m5
fGlpzxTVanR689Y4yJHyxANO7hxNXUpbWnMIRi3KDCW4oTrf/+G8Leb6OTuIOP+Y
gUSzG+wJHEv4FhuJb190MeOXhdRTkjujf5IsCE7hrE0l+uhHVe0oH58mnoNFRiQX
PqXTrtapH4fgEBVSSH/OVNj6p5JgDE6S15eFt2CtUFN5+9pX6lE5C/CdJVzZIomD
h7JlHgE9l491V0eqVP+ejANXe4BMfy594euXCZmG3am5EoHzaD+ozFsWLwWitQLq
OycqZ+P2MCdJhIcbjheoy9cdqqSrmZiISMJvKEzlr0XrwB4em55IMxKv6u3B47H0
3fSZiC/vAgMBAAECggEACg5bRDwACZb/kHMJNAttkOTszXBf5WzY0v17UPAsDPF4
CdnDREjUaaaQyrXLjEtyC+ZYKo7IfIbjO3CaW1bEcRtj7o0HpVi9WpkBaGSlZo81
RZjQYilyaVwQPmyqHn7PKMvS5UL63ukhQUTlwdxrV4mq4NUA1imzF5P+8H4Ov8TV
Jr5A2u/QcqkZa327XgFUADTj8B447MIh+Sd4Vq49k9yOblI41b7UVcnRN1tSQa3D
iomGFsa/q9Alneby0BR0NccrC+Pgblj6RcbDYKkEG/6BYEsvfYidVV6DuW+dc9/o
ffWZgCrp3NJ8mbS3HddbIg2Yaz0/ZOfmoa/M2AN7gQKBgQDcznc3rPTHyV5wqwTk
w9jmwJNjcVqgRj5KrzjhG5BXy6yZyRMK6jGx0z0uz1gUgO/C6bIuAmU9+TA0Ge4H
EkKC7E+HK5Y/fwDSTbmZcQn6tS9LBA9Lt33TRFHnI5CwDcQ4yxvBhstIW5yXZj3G
K4/apa5PPDC/sTqTEyElEnHpKQKBgQDUuCkZEAR+fKLp5LDpVroKAT6rmj+LU/Te
zxLYQtAREEThgys16TaKeMRab0xbeXTSL3pi54o9uQW7UdiZKr/xmgmY+O1rU38f
BnszHELGHgmZpg8wgbREiUMf36LfRaW9ZYH+yUKlV5bbQ9jy2X9vuLPpBdp9u8H0
k7zqVpm7VwKBgFNArYaaebiSXj9Q3Al9JlzqoyfNZ4Qit/3kzydhAy13J97cB4gI
ATCxGtJ5bxZb/wqYnovmb1HMkLY0SKD164n9m4a1knLiaebhU2ddTYvvoKNCJpo/
1vs/OTpTGIyoxCE9w3tWXXMsx3/2FriPWC/yZCSP5zl/kzw87DRUHgrxAoGAc+xk
oT7kZBYCJlq1uoPD4N3qzFPEG2bGhIHusCJBB3uJPihgbQHJ8k58GxiaUSNwcXbk
SHAMGzTwlbO1yUrNzZl3b4EAycN3/G1oyGK3VQZbjvs7PeEBX3Q6O22BchGfkAZ4
gGQnyLliAd4Ipde3pifPC8df2bNvsJyukDpfjwMCgYBPNwQtd/ROhnIbLHCrzDxx
9SAK1BRZXk3b9mxY/HhT1UfaUN7lKuIJ+gNg6fOfDpDfdWPiWIIqCWaj5RHmzZon
GHjqSdiLZmC2pJHe0ya+vpqgZv0n0T2o5b8trNmK7MNRt5E2nU/SxTHo9NOnAdjV
uUS+BZJrC0aPrVqCBQ553A==
-----END PRIVATE KEY-----`;

// Signature dan pesan terenkripsi dari Alice
const signature = "4143fc59a381979f5cc60c3a0c3d20858c97c607c868c67f1848b45cf03c71d4f22d27ef1346cb44f75a8bb7e44992e02140c7f9ff0fb1b9e18152498c987c4bdb6b8cc422b99203507534b770c03989699567478213fb087f2989fcf623b32bde0f88ce225c5f121f3a2be8b706dc3f5bd6933fcef29e7b6f88138425b0cd8d46d4a620fb6694491747944e71e7a418ce8460e6ebc28ec886a6377aa9e31f33a32e432bb5dc69c919e0a4ee6cf09e42b5d696627a87cb37e37d7d47c37b2f17d26296394b7f9ca38e7ca23486fd4bd8c076dbd7360ce18321dd9d1589abcc0b942cdd74e4f5a08bb17c54d8e6bf6cc96754ac2f1fd223001fe63572d6101821"; // Gantilah dengan output dari alice.js
const encryptedMessageHex = "b3ad74ec49798ccae5289df34790fe1a6c6fcc146f423b24ca8ff3deabea56b53f45537c88d866450e873674785b4b47fc3e0b5037aad45c3ab7f3b7f82bb7ad6ae6d1ccfc06cc48427c69056edf334c3ebc55d32d8b2690bb9a60139cae793f083ef74568bfa2934b7dbfc5413f213fa931f53ee41f4dfa89d8b21cdbdcbd04248f656ab6abb5bf3cf3ae8782c2ae7c549d4971e3f260a1a848ad6f28dc0faa7c1b17a776e4573d12c0e50443ac0dd9a6ac0e633368ab9d0e8328683ce53394f81b8b4e6a7fe893d47434d385d84dd44d722b9a1c75d371238f95a53ecbee766db327b7fc8942a41602ce46e35746116568151d0c7c1b637500b6b2c54c901d"; // Gantilah dengan output dari alice.js
const encryptedMessage = Buffer.from(encryptedMessageHex, "hex");

// Dekripsi pesan menggunakan Private Key Bob
const decryptedMessage = crypto.privateDecrypt(
    bobPrivateKeyPem,
    encryptedMessage
);

// Verifikasi signature menggunakan Public Key Alice
const verifier = crypto.createVerify("sha256");
verifier.update(decryptedMessage.toString());
verifier.end();
const isVerified = verifier.verify(alicePublicKeyPem, signature, "hex");

console.log("Signature Verification:", isVerified);
console.log("Message:", decryptedMessage.toString("utf8"));