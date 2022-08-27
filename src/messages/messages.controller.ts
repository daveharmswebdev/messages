import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './Dtos/CreateMessageDto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessageService;

  constructor() {
    this.messagesService = new MessageService();
  }

  @Get()
  getMessages() {
    return this.messagesService.finaAll();
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  createMesage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
