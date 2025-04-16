import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const getPrograms = (req: Request, res: Response) => {
  const filePath = path.join(__dirname, '../data/example-programs.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).json({ message: 'Error reading data file' });
    }
    try {
      const programs = JSON.parse(data);
      return res.json(programs);  
    } catch (jsonError) {
      console.error("Error parsing JSON data:", jsonError);
      return res.status(500).json({ message: 'Error parsing JSON data' });
    }
  });
};

export const addProgram = (req: Request, res: Response) => {
    const newProgram = req.body;
    const filePath = path.join(__dirname, '../data/example-programs.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        return res.status(500).json({ message: 'Error reading data file' });
      }
      try {
        const programs = JSON.parse(data);
        const nextId = programs.length > 0 ? Math.max(...programs.map((program: { id: number }) => program.id)) + 1 : 1;
        const programWithId = { id: nextId, ...newProgram };
        programs.push(programWithId);
        fs.writeFile(filePath, JSON.stringify(programs, null, 2), (err) => {
          if (err) {
            console.error("Error saving data:", err);
            return res.status(500).json({ message: 'Error saving new program' });
          }
          return res.status(201).json(programWithId);
        });
      } catch (jsonError) {
        console.error("Error parsing JSON data:", jsonError);
        return res.status(500).json({ message: 'Error parsing JSON data' });
      }
    });
  };
  export const deleteProgram = (req: Request, res: Response) => {
    const programId = parseInt(req.params.id);  
    const filePath = path.join(__dirname, '../data/example-programs.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        return res.status(500).json({ message: 'Error reading data file' });
      }
      try {
        const programs = JSON.parse(data);
        const programIndex = programs.findIndex((program: { id: number }) => program.id === programId);
        if (programIndex === -1) {
          return res.status(404).json({ message: 'Program not found' });
        }
        programs.splice(programIndex, 1);
        fs.writeFile(filePath, JSON.stringify(programs, null, 2), (err) => {
          if (err) {
            console.error("Error saving data:", err);
            return res.status(500).json({ message: 'Error saving data' });
          }
          return res.status(200).json({ message: 'Program successfully removed' });
        });
      } catch (jsonError) {
        console.error("Error parsing JSON data:", jsonError);
        return res.status(500).json({ message: 'Error processing JSON data' });
      }
    });
  };
  export const updateProgram = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const filePath = path.join(__dirname, '../data/example-programs.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).json({ message: 'Internal error' });
      }
      try {
        const programs = JSON.parse(data);
        const index = programs.findIndex((program: any) => program.id === parseInt(id));
        if (index === -1) {
          return res.status(404).json({ message: 'Program not found' });
        }
        programs[index] = { ...programs[index], ...updatedData };
        fs.writeFile(filePath, JSON.stringify(programs, null, 2), err => {
          if (err) {
            console.error("Error writing file:", err);
            return res.status(500).json({ message: 'Error saving changes' });
          }
          return res.status(200).json(programs[index]);
        });
  
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        return res.status(500).json({ message: 'Error processing data' });
      }
    });
  };