package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

@WebServlet("/roles")
public class RolesServlet extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ArrayList<String> rolesArray = new ArrayList<String>();
        rolesArray.add("Software Engineer");
        rolesArray.add("Student");
        rolesArray.add("Researcher");
        rolesArray.add("Education Advocate");

        String json = convertJson(rolesArray);

        response.setContentType("application/json;");
        response.getWriter().println(json);
    }

    private String convertJson(ArrayList<String> convert){
        Gson gson = new Gson();
        String json = gson.toJson(convert);
        return json;
    }

}
