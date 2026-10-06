import { Organization } from "../models/organization.schema.js";

export const createOrganization = async (req, res, next) => {
  try {
    const {
      legalName,
      dbaName,
      address,
      primaryContact,
      phoneNumber,
      website,
      identifiers,
    } = req.body;

    if (!legalName || !dbaName) {
      return res.status(400).json({
        message: " LegalName and DbaName is required",
      });
    }
    const isCompany = {
      $or: [{ dbaName }, { phoneNumber }, { website }],
    };
    const isCompanyExist = await Organization.findOne(isCompany);
    if (isCompanyExist) {
      return res.status(400).json({
        message: "Organization already exist",
      });
    }

    const organization = await Organization.create({
      legalName,
      dbaName,
      address,
      primaryContact,
      phoneNumber,
      website,
      identifiers,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      message: "Organization created successfully",
      data: organization,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const getOrganization = async (req, res, next) => {
  try {
    const companies = await Organization.find({ createdBy: req.user.id });
    if (!companies || companies.length === 0) {
      return (
        res.status(400),
        json({
          message: "organization not found",
        })
      );
    }
    return res.status(200).json({
      data: companies,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
