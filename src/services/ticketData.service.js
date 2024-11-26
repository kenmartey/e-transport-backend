import ticketData from "../models/ticketData.model.js";

/**
 * Create User Profile
 * @param {Object} ticketData
 * @retur00ns {Promise<ticketData>}
 */
export const createTicketData = async (ticketReqData, res) => {
  return ticketData.create(ticketReqData);
};

/**
 * Get Ticket Details
 * @param {ObjectId} ticketId
 * @returns {Promise<ticketData>}
 */
export const getTicketDataById = async (ticketId) => {
    return ticketData.findById({_id: ticketId});
};
/**
 * Get All Ticket Data for Dashboard
 * @returns {Promise<ticketData>}
 */
export const getAllTicketData = async () => {
    return ticketData.find();
};

/**
 * Get Ticket Details and Update
 * @param {ObjectId} ticketId
 * @returns {Promise<ticketData>}
 */
export const getTicketDataByIdAndUpdate = async (ticketId, ticketReqData) => {
    return ticketData.findOneAndUpdate({_id: ticketId}, {$set: ticketReqData},{
        new: true
      });
  };

  /**
 * Search Ticket Data by Params
 * @returns {Promise<ticketData>}
 */
export const searchTicketDataByParams = async (origin, destination, time) => {
  return ticketData.find({origin: origin, destination: destination, time: time});
};

/**
 * Search Ticket Data by Params
 * @returns {Promise<ticketData>}
 */
  export const searchTicketDataByBusType = async (origin, destination, bus_type) => {
    return ticketData.find({origin: origin, destination: destination, bus_type: bus_type});
  };