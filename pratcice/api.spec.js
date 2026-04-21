const { test, expect } = require('@playwright/test');

var userid;
    test("get user", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users", {
          params: {
            page: 2
          },
          headers: {
            "x-api-key": "reqres_b3114828e6be40978003201ed812c188"
          }
        });
        console.log(await response.text());
        expect(response.status()).toBe(200);
      });

      //create user
      test("create user", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {  
            data:{
                    "name": "Abhi",
                    "job": "QA"
            },
            headers: {
                "x-api-key": "reqres_b3114828e6be40978003201ed812c188"
              }
            });
          expect(response.status()).toBe(201);

     var res=await response.json()
     userid=res.id
        })

        //update user
        test("updateuser", async ({ request }) => {
            const response = await request.put("https://reqres.in/api/users/"+userid,{
                data:{
                    "name": "Abhi",
                    "job": " Senior QA"
            },
                headers: {
                    "x-api-key": "reqres_b3114828e6be40978003201ed812c188"
                  } 

        });
        console.log(await response.text());
        expect(response.status()).toBe(200);
    })
     //delete user
    test("delete", async ({ request }) => {
        const response = await request.delete("https://reqres.in/api/users/"+userid,{
            headers: {
                "x-api-key": "reqres_b3114828e6be40978003201ed812c188"
              }
        });
        expect(response.status()).toBe(204);
    })