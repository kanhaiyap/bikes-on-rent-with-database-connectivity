import java.sql.*;
import java.util.Properties;
import java.lang.*;
class Database{

public static void main(String[] args){
    try {
        //connection to database
        Class.forName("com.mysql.jdbc.Driver"); 
        Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost", "root", "");
        
        //create statement 
        Statement myStmt = myConn.createStatement();
        
        //execute sql query
        ResultSet myRs = myStmt.executeQuery("select * from login");
        
        //results set
        while (myRs.next()) {
         System.out.println(myRs.getString("last name")+ " , "+myRs.getString("first name")+ " , "+myRs.getString("email"));
        }
    }
       catch (Exception exc) {
        exc.printStackTrace();
       }
    }
}