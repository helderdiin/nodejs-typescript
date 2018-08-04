import { Request, Response } from 'express';

export class Routes {
    public routes(app): void {
        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'success GET'
                });
            })
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'success POST'
                });
            });

        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'success GET'
                });
            })
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'success PUT'
                });
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'success DELETE'
                });
            });
    }
}
