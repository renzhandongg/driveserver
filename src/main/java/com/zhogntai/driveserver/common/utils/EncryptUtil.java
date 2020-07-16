package com.zhogntai.driveserver.common.utils;

import java.net.URLDecoder;
import java.net.URLEncoder;
import javax.crypto.Cipher;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class EncryptUtil {

    public EncryptUtil() {
    }

    private static byte[] a(String message, String key)
            throws Exception {
        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
        DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        javax.crypto.SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
        IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
        cipher.init(1, secretKey, iv);
        return cipher.doFinal(message.getBytes("UTF-8"));
    }

    private static String b(String message, String key)
            throws Exception {
        byte bytesrc[] = a(message);
        System.out.println(new String(bytesrc).toString());
        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
        DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        javax.crypto.SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
        IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
        cipher.init(2, secretKey, iv);
        byte retByte[] = cipher.doFinal(bytesrc);
        return new String(retByte);
    }

    private static byte[] a(String ss)
            throws Exception {
        byte digest[] = new byte[ss.length() / 2];
        for (int i = 0; i < digest.length; i++) {
            String byteString = ss.substring(2 * i, 2 * i + 2);
            int byteValue = Integer.parseInt(byteString, 16);
            digest[i] = (byte) byteValue;
        }

        return digest;
    }

    private static String a(byte b[])
            throws Exception {
        StringBuffer hexString = new StringBuffer();
        for (int i = 0; i < b.length; i++) {
            String plainText = Integer.toHexString(255 & b[i]);
            if (plainText.length() < 2)
                plainText = (new StringBuilder()).append("0").append(plainText).toString();
            hexString.append(plainText);
        }

        return hexString.toString();
    }

    public static String encrypt(String message, String key) {
        log.info((new StringBuilder()).append("\u52A0\u5BC6\u539F\u4E32\u4E3A\uFF1A").append(message).toString());
        String enStr = null;
        try {
            String orignStr = URLEncoder.encode(message, "utf-8");
            enStr = a(a(orignStr, key));
        } catch (Exception e) {
            log.error("\u53C2\u6570\u52A0\u5BC6\u5F02\u5E38\uFF01", e);
        }
        return enStr;
    }

    public static String decrypt(String message, String key) {
        String decStr = null;
        try {
            decStr = URLDecoder.decode(b(message, key), "utf-8");
        } catch (Exception e) {
            log.error("\u53C2\u6570\u89E3\u5BC6\u5F02\u5E38\uFF01", e);
        }
        return decStr;
    }

    public static final Log log = LogFactory.getLog(EncryptUtil.class);

}