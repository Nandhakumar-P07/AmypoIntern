package com.amypo.interndetails.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.interndetails.Models.InterndetailsModel;

@Repository
public interface InterndetailsRepo extends JpaRepository<InterndetailsModel,Integer> {
    
    public List<InterndetailsModel> findAllByEmailAndPassword(String email,String password);
}
