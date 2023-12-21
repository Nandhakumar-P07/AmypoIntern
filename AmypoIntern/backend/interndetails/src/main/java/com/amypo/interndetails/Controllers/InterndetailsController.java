package com.amypo.interndetails.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.amypo.interndetails.Models.InterndetailsModel;
import com.amypo.interndetails.Service.InterndetailsService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("*")
public class InterndetailsController{

    @Autowired
    private InterndetailsService ids;

    @GetMapping("/getinterndetails")
    public List<InterndetailsModel> getdata(){
        return ids.getdata();
    }

    @PostMapping("/saveinterndata")
    public InterndetailsModel savedata(@RequestBody InterndetailsModel entity) {
        return ids.savedata(entity);
    }
    
    @PutMapping("/updatedata/{id}")
    public InterndetailsModel updatedata(@PathVariable int id, @RequestBody InterndetailsModel entity) {
        return ids.updatedata(entity, id);
    }

    @DeleteMapping("/deletedata/{id}")
    public void deleteinterndata(@PathVariable int id){
        ids.deletedata(id);
    }

    @GetMapping("/getinternbyid/{id}")
    public InterndetailsModel getMethodName(@PathVariable int id) {
        return ids.getdatabyid(id);
    }
    
    @GetMapping("/login")
    public List<InterndetailsModel> getMethodName(@RequestParam String email,@RequestParam String password) {
        return ids.findByEmailAndPassword(email, password);
    }

}