using System;
using System.Security.Cryptography;

namespace TestApp.App_Start
{
    internal class Helper
    {
        internal static string GetHash(string input)
        {
            using (HashAlgorithm hashAlgorithm = new SHA256CryptoServiceProvider())
            {
                byte[] byteValue = System.Text.Encoding.UTF8.GetBytes(input);
                byte[] byteHash = hashAlgorithm.ComputeHash(byteValue);
                return Convert.ToBase64String(byteHash);
            }
        }
        internal static string GenerateRandomCryptographicKey(int keyLength)
        {
            using (RNGCryptoServiceProvider rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                byte[] randomBytes = new byte[keyLength];
                rngCryptoServiceProvider.GetBytes(randomBytes);
                return Convert.ToBase64String(randomBytes);
            }
        }
    }
}