import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import { UserModel } from '@app/models';

export class ExampleController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router
            .post('/connecteduser', this.connecteduser)
            .get('/getconnecteduser',this.connecteduser);
        return router;
    }


    // public getconnecteduser(){
    //     UserModel.
    // }

    /**
     * Broadcasts a received message to all connected clients
     */
    public connecteduser(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        logger.debug(req.body.event);
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);

        res.json({ message: message });

    }

}
