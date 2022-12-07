import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Analysis from '../Analysis/Analysis';


test('Should decline all properies in a flood zone', () => { 
    const testDataOne = {};
    render(<Analysis id={2} floodValue={true} sizeValue={0} zoneValue={1} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-2`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('No properties can be added to a flood zone.'); 
 }); 

 test('Should decline all properies in a flood zone with high zone and square meters', () => { 
    const testDataOne = {};
    render(<Analysis id={3} floodValue={true} sizeValue={500} zoneValue={3} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-3`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('No properties can be added to a flood zone.'); 
 }); 


 test('Tests for single dwelling house in zone 1', () => { 
    const testDataOne = {};
    render(<Analysis id={4} floodValue={false} sizeValue={0} zoneValue={1} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-4`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Single Dwelling House'); 
 }); 


 test('Tests for single dwelling house in zone 2', () => { 
    const testDataOne = {};
    render(<Analysis id={5} floodValue={false} sizeValue={0} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-5`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Single Dwelling House'); 
 }); 


 test('Tests for single dwelling house in zone 2 with higher size and value', () => { 
    const testDataOne = {};
    render(<Analysis id={6} floodValue={false} sizeValue={750} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-6`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Single Dwelling House'); 
 }); 

 /*
 test('Tests for no single dwelling house in zone 2 with floodzone', () => { 
    const testDataOne = {};
    render(<Analysis id={7} floodValue={true} sizeValue={750} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-7`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Single Dwelling House'); 
 }); 
 */

 test('Tests for apartment building in zone 2 with exactly 500 square', () => { 
    const testDataOne = {};
    render(<Analysis id={8} floodValue={false} sizeValue={500} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-8`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Apartment Property'); 
 }); 

 test('Tests for apartment building in zone 3 with more than 500 square', () => { 
    const testDataOne = {};
    render(<Analysis id={9} floodValue={false} sizeValue={843} zoneValue={3} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-9`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Apartment Property'); 
 }); 
 /*
 test('Tests for no apartment building in zone 2 with less 500 square', () => { 
    const testDataOne = {};
    render(<Analysis id={10} floodValue={false} sizeValue={250} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-10`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Apartment Property'); 
 }); 
*/
/*
 test('Tests for no apartment building in zone 1 with more than 500 square', () => { 
    const testDataOne = {};
    render(<Analysis id={11} floodValue={false} sizeValue={600} zoneValue={1} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-11`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Apartment Property'); 
 }); 
 */

 test('Tests for commerical buildings in zone 3 with exactly 1000 square', () => { 
    const testDataOne = {};
    render(<Analysis id={12} floodValue={false} sizeValue={1000} zoneValue={3} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-12`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Commerical Property'); 
 }); 

 test('Tests for commerical buildings in zone 3 with more than 1000 square', () => { 
    const testDataOne = {};
    render(<Analysis id={13} floodValue={false} sizeValue={1500} zoneValue={3} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-13`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Commerical Property'); 
 }); 

 /*

 test('Tests for no commerical buildings in zone 2 with more than 1000 square', () => { 
    const testDataOne = {};
    render(<Analysis id={14} floodValue={false} sizeValue={1500} zoneValue={2} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-14`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Commerical Property'); 
 }); 
 */

 /*

 test('Tests for no commerical buildings in zone 1 with exactly 1000 square', () => { 
    const testDataOne = {};
    render(<Analysis id={15} floodValue={false} sizeValue={1000} zoneValue={1} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-15`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Commerical Property'); 
 }); 
 */

 /*

 test('Tests for no commerical buildings in zone 3 with less than 1000 square', () => { 
    const testDataOne = {};
    render(<Analysis id={16} floodValue={false} sizeValue={950} zoneValue={3} />); 
    fireEvent.click(screen.getByText('Confirm')); 
    const analysisResults = screen.getByTestId(`analysis-16`); 
    expect(analysisResults).toBeInTheDocument();
    expect(analysisResults).toHaveTextContent('Commerical Property'); 
    
 }); 

 */