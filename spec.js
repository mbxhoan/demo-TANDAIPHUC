var spec =
{
    swagger: "2.0", 
    info: {
        description:
            "Dự án giải pháp checkin sự kiện Delfi Technologies Tích hợp API",
        version: "2.0",    
        title: "Delfi Technologies Tích hợp API - Checkin App"
    },
    host: "https://api.checkin.delfi.vn", 
    basePath: "",   
    tags: [   
        {
            name: "client",                                   // Tên nhóm API
            description: "Các API về thông tin khách hàng",    // Mô tả về nhóm API
        }
    ],
    schemes: ["https"],    // Sử dụng scheme gì? HTTP, HTTPS?
    paths: {
        "/post-data-client": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["client"],
                summary: "Tạo dữ liệu khách hàng",
                description: "Tạo dữ liệu khách hàng",
                operationId: "postDataClient",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [       
                    {
                        "in": "header",
                        "name": "Accept",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "application/json"
                        },
                    },      
                    {
                        "in": "header",
                        "name": "Content-Type",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "application/json"
                        },
                    },      
                    {
                        "in": "header",
                        "name": "App-Key",
                        "description": "App Key (= API Key)",
                        "required": "true",
                        "schema": {
                            "type": "string",
                        },
                    },      
                    {
                        "in": "header",
                        "name": "User-Agent",
                        "description": "User",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "PDA"
                        },
                    },      
                    {
                        "in": "body",      // Tham số được gửi lên từ form
                        "name": "body",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "description": "Các thông tin của 1 khách hàng thêm mới",
                        "schema": {
                            "$ref": "#/definitions/Client"
                        }
                    },
                ],
                responses: {
                    200: {
                        description: "Cập nhật thông tin khách hành thành công",
                        schema: {
                            $ref: "#/definitions/ApiResponse200" 
                        }
                    },
                    400: {
                        description: "Sai thông tin trường, Sai secret token, IP không hợp lệ, Lỗi cấu hình,...",
                        schema: {
                            $ref: "#/definitions/ApiResponse400"  
                        }
                    },
                    422: {
                        description: "Thiếu thông tin của trường quan trọng (securiry_token, event_code, name, email)",
                        schema: {
                            $ref: "#/definitions/ApiResponse422"  
                        }
                    },
                },
                security: [
                    
                ]
            }
        },
    },
    definitions: {
        Client: {                
            type: "object",         
            properties: {       
                secret_token: {
                    type: "string",
                    example: "KMfnSD4Qgtze5OODxxx"
                },
                event_code: {
                    type: "string",
                    example: "TANDAIPHUC2023"
                },
                client: {
                    type: "object",
                    properties: {
                        order_id: {                 
                            type: "number",  
                            example: 43993
                        },
                        name: {
                            type: "string",
                            example: "Nguyễn Trần Nam"
                        },
                        email: {
                            type: "string",
                            example: "ntn@gmail.com"
                        },
                        phone: {                 
                            type: "number",  
                            example: "0902639266"
                        },
                        custom_fields: {
                            type: "object",
                            example: {
                                "address": "HCM, Viet Nam",
                                "order_time": "07/10/2001 13:52:09",
                                "payment_time": "07/10/2001 14:00:25",
                                "transaction_id": 14029115,
                                "ticket_conference": "Session A\n",
                                "ticket_early": "Member (Hội viên thuộc các LCH) – 1.500.000\n",
                                "ticket_standard": "Member (Hội viên thuộc các LCH) – 1.500.000\n"
                            }
                        },
                    } 
                },
                
            }
        },
        ApiResponse200: {          
            type: "object",       
            properties: {      
                status: {
                    example: "success"   
                },
                status_code: {
                    example: "200"
                },
                message: {    
                    example: "Cập nhật thông tin khách hành thành công"
                },
                data: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 4604
                        },
                        qrcode: {
                            type: "string",
                            example: "TANDAIPHUC2023050623023542B9KGT" 
                        },
                        ref_id: {
                            type: "number",
                            example: 43993 
                        },
                        name: {
                            type: "string",
                            example: "Nguyễn Trần Nam" 
                        },
                        phone: {           
                            type: "number",   
                            example: "0902639xxx"
                        },
                        email: {
                            type: "string",
                            example: "ntn@gmail.com"   
                        },
                        type: {
                            type: "string",
                            example: "NORMAL"   
                        },
                        status: {
                            type: "string",
                            example: "NEW"   
                        },
                        img_qrcode: {
                            type: "string",
                            example: ""   
                        },
                        document_pdf: {
                            type: "string",
                            example: ""   
                        },
                        avatar: {
                            type: "string",
                            example: ""   
                        },
                        checkin_count: {
                            type: "number",
                            example: 0 
                        },
                        custom_fields: {
                            type: "object",
                            example: {
                                "address": "HCM, Viet Nam",
                                "order_time": "07/10/2001 13:52:09",
                                "payment_time": "07/10/2001 14:00:25",
                                "transaction_id": 14029115,
                                "ticket_conference": {
                                    "opt1": "ticket_conference_opt1"
                                },
                                "ticket_standard": {
                                    "opt1": "ticket_standard_opt1"
                                },
                                "ticket_early": {
                                    "opt1": "ticket_early_opt1"
                                }
                            }
                        }
                    }    
                },
            }
        },           
        ApiResponse400: {          
            type: "object",       
            properties: {      
                status: {
                    example: "error"   
                },
                status_code: {
                    example: "400"
                },
                message: {    
                    example: "Lỗi! Không tìm thấy sự kiện hoặc Sai dữ liệu. Vui lòng kiểm tra lại."
                },
                data: {
                    type: "object",
                    example: null 
                },
            }
        },           
        ApiResponse422: {          
            type: "object",       
            properties: {      
                status: {
                    example: "error"   
                },
                status_code: {
                    example: "422"
                },
                message: {    
                    type: "object",
                    properties: {
                        event_code: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The event code field is required."
                            }
                        },
                        client_name: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The client_name field is required."
                            }
                        },
                        client_email: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The client_email field is required."
                            }
                        },
                    }
                },
                data: {
                    type: "object",
                    example: null 
                },
            }
        },       
    }
};
