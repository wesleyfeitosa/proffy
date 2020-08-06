import { Request, Response } from 'express';
import db from '../database/connections';

export default class ConnectionsController {
  async index(request: Request, response: Response): Promise<any> {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total: Number(total) });
  }

  async create(request: Request, response: Response): Promise<any> {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}
