/*
 * 通用正则表达式
 * */

// 手机号
export const mobile = /^1\d{10}$/; // /^1[3|4|5|7|8][0-9]{9}$/;

// 座机号
export const landLine = /^([0-9]{3,4}-)?[0-9]{7,8}$/;

// qq号
export const qq = /^[1-9][0-9]{4,9}$/;

// 身份证号
export const cardNumber = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;

// 邮箱
export const email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

// 纯数字，不包括 + -
export const number = /[0-9]+$/;

// 整数
export const integer = /^[-]{0,1}[0-9]{1,}$/;

// 正整数
export const positiveInteger = /^[0-9]+$/;

// 数字、保存两位小数
export const numberWithTwoDecimal = /^\d+(\.\d)?(\d)?$/;