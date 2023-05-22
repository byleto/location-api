import { RequestHandler } from "express";

import { Locations } from "../models/locations";

export const createLocation: RequestHandler = async (req, res, next) => {
  const locations = await Locations.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Location created successfully", data: locations });
};

export const deleteLocation: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedLocation: Locations | null = await Locations.findByPk(id);
  await Locations.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Location deleted successfully", data: deletedLocation });
};

export const getAllLocations: RequestHandler = async (req, res, next) => {
  const allLocations: Locations[] = await Locations.findAll();
  return res
    .status(200)
    .json({ message: "Location fetched successfully", data: allLocations });
};
