package com.amypo.interndetails.Models;


import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "interndetails")
public class InterndetailsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String college;
    private Long phonenumber;
    private String dateofjoining;
    private String dateofcompletion;
    private String role;
    private String password;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] image;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] idcardimage;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] aadharImage;
}
