import {createTicketData, getTicketDataById,getAllTicketData, getTicketDataByIdAndUpdate, searchTicketDataByParams, searchTicketDataByBusType} from '../services/ticketData.service.js';

export const createTicketDataController = async (req, res) => {
    const ticketData = await createTicketData(req.body);
    return ticketData
};

export const getTicketDataDetailController = async (ticketId, res) => {
    const ticketDetail = await getTicketDataById(ticketId);
    return ticketDetail
};

export const allTicketDataController = async ( res) => {
    const ticketDetail = await getAllTicketData();
    return ticketDetail
};

export const updateTicketDataDetailController = async (ticketId, req, res) => {
    const updateTicketData = await getTicketDataByIdAndUpdate(ticketId, req.body);
    return updateTicketData
};

export const searchTicketDataController = async (origin, destination, time, res) => {
    const searchTicketData = await searchTicketDataByParams(origin, destination, time);
    return searchTicketData
};

export const searchTicketDataByBusTypeController = async (origin, destination, bus_type, res) => {
    const searchTicketData = await searchTicketDataByBusType(origin, destination, bus_type);
    return searchTicketData
};