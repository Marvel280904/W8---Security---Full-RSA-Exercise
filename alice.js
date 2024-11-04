const crypto = require("crypto");

// alice private key
const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDF17Lx3wIDlIhf
dVitTB3waW96+dndc9mbkjj+ATG8x7Woa8uKk+o4/bgQTyV+LnNmRFQYoObNhN0H
ge+/CYM7Vc10nh/Oawfz+E+qu3f/Pt1pb1A3rYnEff5AmHgecfPQ3MzbdR6WwUAj
37EXOkbEYKfc3NQYps+kHDEUpkzp/lO3PmDM5RdqvSwpGhn4ls62b4Ot7wotEmkv
spLJY4GEaw7xuVEc856qZMQtaybG74d0jeuKu4SAtJjDTqAvN92FZPRQQZDPdSDp
VLd1WGrQf9JCLXxHX/4MualSDxFPVgqNZxCBfu/umJ+x0B35a1IYWK6IQ369SOGT
YmtFeIcRAgMBAAECggEALrc/HtPM0vGYvgmkdc86ZpFO7JfgtOTtJkoBwSChEPWL
VIiXmFJTBUAL3XYC4Wewgh5ySRp9RVwxINuys8ZYQYOCLx5DXmdxik9A6Iy5ygCb
IZFSPMNye35QsgoOmwnHS7NHgC6ImYpqTc49L8HoAejc2k8eme+Rqiup/zlBgiLL
xNID30jnHnZVQA4JzgZyVsv2VLRRbsoQcrW5SxcrISwkNplaz0RAnwcPjVdd+/v4
VbrIA/PuCPiXzysKs+H+1ld3vYCZV+mLaj4J0LtR3jPLvI4iE5L41ZatOcLx/YJ3
HpgkAWUGF/ieY9zTLLEVt3wdc2Ezxjk3cVVUO/WKXQKBgQD8CedMw7WGCPFC8jhc
1e8I2pxEqymsHE5uWYo7rxoAZlbWMVhBXoYBbWZgwrs+/IYa4rbKSLQFKV0tz3RR
QI6hafVy2gXaaN6dCm4WEJXd4FzHorev6Karc8HdcDHyDrscPBa5pxRH2/VLFed/
bSV72FZ7yrJHpUfl0qZH+HTzcwKBgQDI87u/ESnFb6sgvf+qxZTTSZTtYKg/9K8m
BFvawOHTsY29IZ/7zKumz9l4xFFCNTaEP1bk7kHkzMS8fvrzDgPC/d5XWCceh35S
+UM8dAKcZZzp1EiTjOCnmg0jxFk6+HiT4ImEkZQBZ3DzoIl/X2vDSFUYZWqVz5Re
a/CzmViiawKBgQDTXbbVYNettXgnTZ1I9bzF7xfYWrbS+NYpovvTe9BRf4HZlX5P
K+cz8TxHb2e6ten9SB5FXF1kasES9wS0U3CKG6NVE1SPSx1OE/4okPYuIceNQH/N
jU2hQa3WeA3a0tHGJvpj7aOLdAKtWoxPCAjEaLR2kpGalhjKuzLp7oqd0wKBgQCP
vsnuQzi+IsMnCMJ6RhvPiDMgGqRAG6euai/Kq27fH4NkZ0kptZ6UFNpbqRL3aVk2
AJkH6eb45AFXVP3uH3hRY4hIsqZJEGMst2GBPPshJQ65tUC1S3DocyozC6FIrbST
E2tLiVd2KaiCnbO9iWRsrLEyYll8EKDxagUkc+0TQQKBgQC9mQq0mYOPxvcbihtJ
roVw1ZnC7X765Ot/wCwqzJYSp2cA9w0n/12+rZe32vDFLtlPSmOYKpwZwTrI9btl
1+mVOWCt7xEHebWGcCpqk8L3UsasF8FHPUzLYyeN/7fDwc/JByTZFd06u6y2ZmKz
qer5yptZWYnAKBLrl2dlRfVJDA==
-----END PRIVATE KEY-----`;

// bob public key
const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3nSknpRXEvpuXxpac8U
1Wp0evPWOMiR8sQDTu4cTV1KW1pzCEYtygwluKE63//hvC3m+jk7iDj/mIFEsxvs
CRxL+BYbiW9fdDHjl4XUU5I7o3+SLAhO4axNJfroR1XtKB+fJp6DRUYkFz6l067W
qR+H4BAVUkh/zlTY+qeSYAxOkteXhbdgrVBTefvaV+pROQvwnSVc2SKJg4eyZR4B
PZePdVdHqlT/nowDV3uATH8ufeHrlwmZht2puRKB82g/qMxbFi8ForUC6jsnKmfj
9jAnSYSHG44XqMvXHaqkq5mYiEjCbyhM5a9F68AeHpueSDMSr+rtweOx9N30mYgv
7wIDAQAB
-----END PUBLIC KEY-----`;

// message yang mau dikirim
const message = "I want some apples";

// generate signature dari alice
const signer = crypto.createSign("sha256");
signer.update(message);
signer.end();
const signature = signer.sign(alicePrivateKeyPem, "hex");

// enkripsi pesan menggunakan bob public key
const encryptedMessage = crypto.publicEncrypt(
    bobPublicKeyPem,
    Buffer.from(message)
);

console.log("Signature:", signature);
console.log("Message:", encryptedMessage.toString("hex"));