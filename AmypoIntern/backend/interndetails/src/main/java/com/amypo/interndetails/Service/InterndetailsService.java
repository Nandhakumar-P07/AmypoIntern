package com.amypo.interndetails.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amypo.interndetails.Models.InterndetailsModel;
import com.amypo.interndetails.Repo.InterndetailsRepo;

@Service
public class InterndetailsService {
    
    @Autowired
    private InterndetailsRepo idr;

    public List<InterndetailsModel> getdata(){
        return idr.findAll();
    }

    public InterndetailsModel getdatabyid(int id){
        return idr.findById(id).get();
    }

    public InterndetailsModel savedata(InterndetailsModel intern){
        return idr.save(intern);
    }

    public InterndetailsModel updatedata(InterndetailsModel intern,int id){
        intern.setId(id);
        return idr.save(intern);
    }

    public void deletedata(int id ){
         idr.deleteById(id);
    }

    public List<InterndetailsModel> findByEmailAndPassword(String email,String password){
        List<InterndetailsModel> obj = idr.findAllByEmailAndPassword(email, password);
        if(obj!=null){
            return obj;
        }else{
            return null;
        }
    }
}
