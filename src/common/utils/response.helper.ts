import { Request, Response } from 'express';

export function sendResponse(
  req: Request,
  res: Response,
  options: {
    view: string;
    viewData: any;
    jsonData: any;
    statusCode?: number;
    redirectUrl?: string;
  },
) {
  const statusCode = options.statusCode || 200;
  const accept = req.get('Accept') || '';
  const isJson =
    accept.includes('application/json') ||
    req.path.startsWith('/api') ||
    req.xhr;

  if (isJson) {
    return res.status(statusCode).json({
      success: statusCode >= 200 && statusCode < 300,
      ...options.jsonData,
    });
  }

  if (options.redirectUrl) {
    return res.redirect(options.redirectUrl);
  }

  return res.status(statusCode).render(options.view, {
    ...options.viewData,
    user: (req as any).session?.user || null,
  });
}

