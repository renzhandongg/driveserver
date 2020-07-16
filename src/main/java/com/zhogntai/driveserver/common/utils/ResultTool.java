package com.zhogntai.driveserver.common.utils;

import com.zhogntai.driveserver.common.entity.JsonResult;
import com.zhogntai.driveserver.common.enums.ResultCode;

public class ResultTool {
    public static JsonResult success() {
        return new JsonResult(true);
    }

    public static <T> JsonResult<T> success(T data) {
        return new JsonResult(true, data);
    }

    public static JsonResult fail() {
        return new JsonResult(false);
    }

    public static JsonResult fail(ResultCode resultEnum) {
        return new JsonResult(false, resultEnum);
    }
}
